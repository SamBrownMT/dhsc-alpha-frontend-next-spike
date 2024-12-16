import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['rootDir/tests/**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
