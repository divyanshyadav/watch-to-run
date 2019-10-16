const path = require('path');
const fs = require('fs');
const CONSTANTS = require('./constants');

const APP_NAME = 'watchtorun';

function validateFile(value) {
    if (!fs.existsSync(value)) {
        throw new Error(`Error: ${CONSTANTS.fileDoestExist}`);
    }
}

function getUsageExamples(executingFileName) {
    const examples = [
        `eg. ${executingFileName} 'npx babel-node' ./file.js`,
        `eg. ${executingFileName} node ./file.js`,
    ];

    return `\n\n${examples.join('\n')}\n`;
}

function getHelpSection() {
    const executingFileName = APP_NAME;
    return `Usage: ${executingFileName} <runner> <file> ${getUsageExamples(executingFileName)}`;
}


function validate({ filename, runner }) {
    if (!filename || !runner) {
        throw new Error(getHelpSection());
    }

    const filePath = path.resolve(filename);
    validateFile(filePath);

    return {
        filename: filePath,
        runner,
    };
}

module.exports = validate;
