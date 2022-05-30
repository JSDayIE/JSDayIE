/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ["lib"]
}

 export default config;