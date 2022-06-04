/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ["lib"],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        "^.+\\.(ts|js)x?$": "ts-jest"
    }
}

export default config;