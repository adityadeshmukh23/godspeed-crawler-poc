---
source_url: https://raw.githubusercontent.com/vercel/next.js/canary/jest.config.turbopack.js
last_updated: 2025-06-21T18:00:54.105Z
commit_hash: 3a3379ea8ae26367a09e034a5b251e422bb50ccc
---

const createJestDefaultConfig = require('./jest.config.js')

module.exports = async function createConfig() {
  const jestDefaultConfig = await createJestDefaultConfig()
  /** @type {import('jest').Config} */
  const customConfig = {
    ...jestDefaultConfig,
    displayName: 'Turbopack',
    setupFiles: [
      ...(jestDefaultConfig.setupFiles ?? []),
      '<rootDir>/jest-setup-files.turbopack.js',
    ],
  }

  return customConfig
}
