const fs = require('fs');
const { execute } = require('./system');
const logger = require('./logger');
const validator = require('./validator');
const CONSTANTS = require('./constants');

const WATCH_INTERVAL = 200;

function watchAndRun({ filename, cmd }) {
    const finalCmd = `${cmd} ${filename}`;
    execute(finalCmd);

    fs.watchFile(filename, { interval: WATCH_INTERVAL }, () => {
        logger.clear();
        logger.loading(CONSTANTS.executing);
        execute(finalCmd);
    });
}


function main() {
    try {
        const { runner, filename } = validator({
            runner: process.argv[2],
            filename: process.argv[3],
        });

        watchAndRun({
            filename,
            cmd: runner,
        });
    } catch (err) {
        logger.error(err.message);
    }
}

main();
