const { exec } = require('child_process');
const logger = require('./logger');

function execute(cmd, clear = true) {
    exec(cmd, (err, stdout, stderr) => {
        if (clear) {
            logger.clear();
        }

        if (err) {
            logger.error(err.message);
        } else {
            if (stdout) {
                logger.log(`${stdout}`);
            }

            if (stderr) {
                logger.log(`${stderr}`);
            }
        }
    });
}


module.exports = {
    execute,
};
