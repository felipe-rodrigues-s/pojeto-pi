module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  projects: ['<rootDir>/packages/**/jest.config.js'],
  coverageDirectory: '<rootDir>/packages/**/__tests__/coverage',
  testEnvironment: 'node',
  testMatch: ['*.test.js', '*.test.jsx'],
};
