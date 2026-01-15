/**
 * Centralized site data configuration
 *
 * This file contains all the dynamic data used across the aicgen-site.
 * Update this file when releasing new versions or adding features.
 */

export const SITE_DATA = {
  version: '1.0',

  stats: {
    guidelines: 91,
    categories: 12,
    languages: 9,
    assistants: 5,
  },

  languages: [
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'Rust',
    'Java',
    'C#',
    'Ruby',
    'Dart',
    'Swift',
  ],

  assistants: [
    'Claude Code',
    'GitHub Copilot',
    'Gemini',
    'Codex',
    'Antigravity',
  ],

  categories: [
    'Language',
    'Architecture',
    'Testing',
    'Security',
    'Performance',
    'Database',
    'API Design',
    'Code Style',
    'Error Handling',
    'DevOps',
    'Best Practices',
    'Design Patterns',
  ],

  features: {
    multiAssistant: {
      title: 'Multi-Assistant Support',
      description: 'Supports Claude Code, GitHub Copilot, Gemini, Antigravity, and Codex out of the box.',
    },
    guidelines: {
      title: '91 Guidelines',
      description: 'Comprehensive coverage across 12 categories including Security, API Design, and Performance.',
    },
    interactiveCLI: {
      title: 'Interactive CLI Wizard',
      description: 'Professional setup wizard with smart defaults, back navigation, and auto-detection.',
    },
    hooksSubAgents: {
      title: 'Hooks & Sub-Agents',
      description: 'Auto-generates verification agents and hooks specifically for Claude Code workflows.',
    },
    architectureAware: {
      title: 'Architecture Aware',
      description: 'Tailors guidelines for Microservices, Hexagonal, Modular Monoliths, and Event-Driven systems.',
    },
    zeroDependencies: {
      title: 'Zero Dependencies',
      description: 'Self-contained binary with all guideline data embedded. Works completely offline.',
    },
  },

  github: {
    url: 'https://github.com/lpsandaruwan/aicgen',
    owner: 'lpsandaruwan',
    repo: 'aicgen',
  },

  npm: {
    url: 'https://www.npmjs.com/package/@aicgen/aicgen',
    package: '@aicgen/aicgen',
  },

  meta: {
    title: 'aicgen - AI Config Generator',
    description: 'Configuration generator for AI coding assistants. Make your project AI-ready in seconds.',
    author: 'Lahiru Sandaruwan',
  },
} as const;

export type SiteData = typeof SITE_DATA;
