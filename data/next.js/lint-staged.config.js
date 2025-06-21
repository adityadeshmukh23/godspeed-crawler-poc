---
source_url: https://raw.githubusercontent.com/vercel/next.js/canary/lint-staged.config.js
last_updated: 2025-06-21T18:00:55.188Z
commit_hash: f9df6a963b9324b8f90fed30e7278cdf33543e5c
---

module.exports = {
  '*.{js,jsx,mjs,ts,tsx,mts,mdx}': [
    'prettier --with-node-modules --ignore-path .prettierignore --write',
    'cross-env ESLINT_USE_FLAT_CONFIG=false eslint --config .eslintrc.json --no-eslintrc --fix',
  ],
  '*.{json,md,css,html,yml,yaml,scss}': [
    'prettier --with-node-modules --ignore-path .prettierignore --write',
  ],
  '*.rs': ['cargo fmt --'],
}
