/* eslint-disable no-console */
const { exec } = require('child_process');

function execute(cmd, clear = true) {
    exec(cmd, (err, stdout, stderr) => {
        if (clear) {
            console.clear();
        }

        if (err) {
            console.error(err.message);
        } else {
            if (stdout) {
                console.log(`${stdout}`);
            }

            if (stderr) {
                console.log(`${stderr}`);
            }
        }
    });
}


module.exports = {
    execute,
};
