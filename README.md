# 🚀 Godspeed Crawler – POC Submission

> **Proof of Concept** for the Godspeed Remote Internship Program  
> Developed by: [Aditya Deshmukh](https://github.com/adityadeshmukh23) | B.Tech Student, IIT Kanpur

---

## 📌 Overview

**Godspeed Crawler** is a content ingestion system that intelligently extracts content from GitHub repositories and web URLs and stores them in structured local folders. The system ensures efficiency by syncing only new or modified content using commit hashes, content hashing, or timestamps.

This project demonstrates:
- 🔧 Real-world backend automation
- 🧠 Thoughtful design and modular development
- ⚡ Industry-relevant tooling and workflow

---

## 🧠 Project Highlights

| Feature                          | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| 🔁 **GitHub Sync**               | Extracts latest repo content using GitHub API + commit hash diff            |
| 🧱 **Folder Mirroring**          | Local folder structure mirrors GitHub repository layout                     |
| 🗃️ **YAML Metadata**            | Each `.md` file contains metadata (source, commit hash, update timestamp)  |
| 📁 **Selective Writes**          | Writes only new/modified content using SHA/commit-based comparison          |
| 🔐 **Secure Auth**               | Uses GitHub Personal Access Token via `.env` (not committed)                |

---

## 🧰 Tech Stack

- **Node.js** – core engine  
- **Godspeed Framework** – modular event-driven scaffold  
- **Axios** – for fetching GitHub API and URLs  
- **fs-extra** – smart file and folder handling  
- **dotenv** – secure API key and config storage  
- **yaml** – for metadata formatting  

---

## 🧪 How to Run Locally

bash
# Step 1: Clone this repo
git clone https://github.com/adityadeshmukh23/godspeed-crawler-poc.git
cd godspeed-crawler-poc

# Step 2: Install dependencies
npm install

# Step 3: Set your GitHub token in a .env file
touch .env

Add this line to .env (no spaces):
GITHUB_TOKEN=your_personal_access_token_here

# Step 4: Run the crawler
node index.js

data/
└── github/
    └── owner/
        └── repo/
            ├── README.md
            └── docs/
                └── guide.md


Each .md file contains:
---
source_url: https://github.com/owner/repo/blob/main/docs/guide.md
last_updated: 2025-06-21T18:00:00Z
commit_hash: 90b9f3bb7d64b...
---

## 🔐 Security Note
This project uses `.env` for storing sensitive tokens.  
Make sure you **never commit your `.env` file**, and use `.gitignore` to exclude it.

## 🙌 Acknowledgements
Special thanks to:
- Godspeed Systems for this opportunity
- GitHub API and open-source ecosystem
- The Node.js community


## 👨‍💻 Maintainer

**Aditya Deshmukh**  
B.Tech Undergraduate, IIT Kanpur  
Godspeed Remote Internship Program – Summer 2025

- 🛠 Passionate about building real-world automation & AI-integrated tools  
- 🧠 Interested in backend systems, data engineering, and developer productivity  
- 🌐 [GitHub](https://github.com/adityadeshmukh23) | 📫 adityad23@iitk.ac.in

Feel free to open issues, contribute ideas, or connect for discussions!

