const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();
const YAML = require('yaml');
const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN not found in .env");
  process.exit(1);
}

const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
  'User-Agent': 'godspeed-crawler'
};

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const owner = 'vercel'; // GitHub username/org
const repo = 'next.js'; // Repository name

async function saveFileWithMetadata(file, owner, repo) {
  const res = await axios.get(file.download_url);
  const localPath = path.join(__dirname, 'data', owner, repo, file.name);

  const metadata = {
    source_url: file.download_url,
    last_updated: new Date().toISOString(),
    commit_hash: file.sha,
  };

  const metadataYAML = '---\n' + YAML.stringify(metadata) + '---\n\n';
  await fs.outputFile(localPath, metadataYAML + res.data);
  console.log(`✅ Saved: ${file.name}`);
}

async function getLatestFiles() {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents`,
      { headers, httpsAgent }
    );

    const files = res.data;
    for (const file of files) {
      if (file.type === 'file') {
        await saveFileWithMetadata(file, owner, repo);
      }
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

getLatestFiles();
