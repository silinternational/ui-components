const { execSync } = require('child_process')

const CHANGELOG_HEADER = `# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).`

const plugins = [
  [
    '@semantic-release/npm',

    {
      npmPublish: false,
    },
  ],
  [
    '@semantic-release/commit-analyzer',
    {
      preset: 'conventionalcommits',
      releaseRules: [
        { breaking: true, release: 'major' },
        {
          type: 'add',
          release: 'minor',
        },
        {
          type: 'feat',
          release: 'minor',
        },
        {
          type: 'fix',
          release: 'patch',
        },
        {
          type: 'change',
          release: 'minor',
        },
        {
          type: 'deprecate',
          release: 'minor',
        },
        {
          type: 'remove',
          release: 'minor',
        },
        {
          type: 'security',
          release: 'patch',
        },
        {
          type: 'chore',
          release: 'patch',
        },
        {
          type: 'docs',
          scope: 'README',
          release: 'patch',
        },
        {
          type: 'refactor',
          release: 'patch',
        },
        {
          type: 'style',
          release: 'patch',
        },
        {
          type: 'perf',
          release: 'patch',
        },
        {
          type: 'test',
          release: 'patch',
        },
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
      },
    },
  ],
  [
    '@semantic-release/release-notes-generator',
    {
      preset: 'conventionalcommits',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
      },
      presetConfig: {
        types: [
          {
            type: 'add',
            section: 'Added',
          },
          {
            type: 'feat',
            section: 'Added',
          },
          {
            type: 'fix',
            section: 'Fixed',
          },
          {
            type: 'change',
            section: 'Changed',
          },
          {
            type: 'deprecate',
            section: 'Deprecated',
          },
          {
            type: 'remove',
            section: 'Removed',
          },
          {
            type: 'security',
            section: 'Security',
          },
          {
            type: 'chore',
            hidden: 'Changed',
          },
          {
            type: 'docs',
            section: 'Changed',
          },
          {
            type: 'style',
            section: 'Changed',
          },
          {
            type: 'refactor',
            section: 'Changed',
          },
          {
            type: 'perf',
            section: 'Changed',
          },
          {
            type: 'test',
            section: 'Changed',
          },
        ],
      },
    },
  ],
]

module.exports = isDryRun() ? getDryRunConfig() : getCIConfig()

function getDryRunConfig() {
  return {
    repositoryUrl: getLocalRepoUrl(),
    branches: getCurrentBranch(),
    plugins: plugins,
  }
}

function getCIConfig() {
  // contains your normal semantic-release config
  // this will be used on your CI environment
  return {
    branches: ['develop'],
    plugins: [
      ...plugins,
      ['@semantic-release/changelog', { changelogTitle: CHANGELOG_HEADER }],
      '@semantic-release/git',
      ['@semantic-release/github', { draftRelease: true }],
    ],
  }
}

function isDryRun() {
  return process.argv.includes('--dry-run')
}

function getLocalRepoUrl() {
  const topLevelDir = execSync('git rev-parse --show-toplevel').toString().trim()

  return `file://${topLevelDir}/.git`
}

function getCurrentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}
