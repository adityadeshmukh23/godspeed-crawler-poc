# Godspeed Crawler - POC Submission

This is my Proof of Concept for the Godspeed Remote Internship Program.

## 💡 Project Description
The Godspeed Crawler extracts content from GitHub repositories and web URLs, saves them locally, and keeps everything updated without redundancy.

## 🛠 Tech Stack
- Node.js
- Godspeed Framework
- Axios
- dotenv
- fs-extra
- yaml

## ✅ Features Implemented
- GitHub repo sync using commit hash
- Content saved with metadata in `.md` format
- Local folder structure mimics GitHub repo layout

## 🔧 How to Run
1. Clone this repo
2. Create a `.env` file with your GitHub token:
    ```
    GITHUB_TOKEN=your_token_here
    ```
3. Run:
    ```bash
    node index.js
    ```

## 🧠 Future Scope
- Add RSS/sitemap crawler
- Add Twitter feed support
- Add cron-based syncing

---

*Made with ❤️ by Aditya Deshmukh (IIT Kanpur)*
