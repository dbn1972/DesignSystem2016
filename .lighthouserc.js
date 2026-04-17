module.exports = {
  ci: {
    collect: {
      // Use the production build
      staticDistDir: './dist',
      // Test key pages
      url: [
        'http://localhost/',
        'http://localhost/patterns',
        'http://localhost/components',
        'http://localhost/foundations',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        // Throttling for consistent results
        throttling: {
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      assertions: {
        // Performance: target > 80
        'categories:performance': ['warn', { minScore: 0.8 }],
        // Accessibility: target > 90
        'categories:accessibility': ['error', { minScore: 0.9 }],
        // Best Practices: target > 90
        'categories:best-practices': ['error', { minScore: 0.9 }],
        // SEO: target > 90
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      // Store results locally (no external server)
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
