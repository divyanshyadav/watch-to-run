/* eslint-disable no-console */

module.exports = {
    loading: (...args) => {
        console.log(...args, '...');
    },
    log: console.log,
    error: (...args) => {
        console.error('[x]', ...args);
    },
    clear: console.clear,
};
