# 📄 PRD - Godspeed Crawler

## 🎯 Objective
To build a file-based content ingestion system that pulls files from GitHub repositories and web URLs, storing them locally in structured folders. The system only syncs new or updated content to avoid redundancy and enable efficient downstream use (e.g., indexing, static generation, or AI pipelines).

---

## ✅ Features Implemented in POC (Proof of Concept)

- 🔁 GitHub repository sync using GitHub API & commit hashes  
- 🗂️ Folder structure mirrors the GitHub repo’s layout  
- 📄 Files saved in `.md` format with **YAML frontmatter metadata**  
- 🔍 Only new or modified files are written to disk  
- 🔐 Secure access using token in `.env` (not committed)

---

## 🧠 Technical Approach

- 📦 Used [`axios`](https://www.npmjs.com/package/axios) for HTTP requests  
- 📁 [`fs-extra`](https://www.npmjs.com/package/fs-extra) for advanced file operations  
- 🔐 [`dotenv`](https://www.npmjs.com/package/dotenv) to manage GitHub access token  
- 🧮 Used commit hash (SHA) to detect and sync only updated files  

---

⏭️ Future Scope

🌐 Web content crawling (blogs, news) via RSS or sitemaps
🐦 Add Twitter/X feed support using Twitter API
⏲️ Add scheduled syncs using cron or godspeed-cron
🧪 Add duplicate detection via SHA-256 content hashing
⚙️ Add CLI or REST API to trigger syncs manually

---

## 📁 Output Folder Structure
```bash
data/
└── github/
    └── owner/
        └── repo/
            ├── README.md
            └── index.md



