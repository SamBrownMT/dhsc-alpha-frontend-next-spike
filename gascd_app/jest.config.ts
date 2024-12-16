import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['rootDir/tests/**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/gascd_app/src/$1', // Resolve @ to the src folder in gascd_app
    '^@/test-utils/(.*)$': '<rootDir>/tests/utils/$1', // Resolve test-utils to the tests folder
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
