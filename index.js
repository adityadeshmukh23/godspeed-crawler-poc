process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();
const YAML = require('yaml');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
  'User-Agent': 'godspeed-crawler'
};

const owner = 'vercel'; // replace with any GitHub username/org
const repo = 'next.js'; // replace with any repo name

async function getLatestFiles() {
  try {
const https = require('https');

const agent = new https.Agent({ rejectUnauthorized: false });

const res = await axios.get(
  `https://api.github.com/repos/${owner}/${repo}/contents`,
  { headers, httpsAgent: agent }
);

    const files = res.data;

    for (const file of files) {
      if (file.type === 'file') {
        const fileContent = await axios.get(file.download_url);
        const localPath = path.join(__dirname, 'data', repo, file.name);

        const metadata = {
          source_url: file.download_url,
          last_updated: new Date().toISOString(),
          commit_hash: file.sha
        };

        const metadataYAML = '---\n' + YAML.stringify(metadata) + '---\n\n';

        await fs.outputFile(localPath, metadataYAML + fileContent.data);
        console.log(`Saved: ${file.name}`);
      }
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

getLatestFiles();
