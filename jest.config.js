module.exports = {
    moduleNameMapper: {
        '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/imageMock.js',
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'},
    setupFilesAfterEnv: [
        '<rootDir>/test_setup.js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/'
    ],
    collectCoverage: true,
    verbose: true,
    unmockedModulePathPatterns: [
        '<rootDir>/node_modules/react/',
        '<rootDir>/node_modules/react-dom/',
        '<rootDir>/node_modules/react-addons-test-utils/',
        '<rootDir>/node_modules/fbjs',
        '<rootDir>/node_modules/core-js',
    ]
};