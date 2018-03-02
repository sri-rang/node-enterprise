const fs = require('fs');

const NOT_IMPLEMENTED = () => {
    throw new Error('Not implemented');
};

const initialize = NOT_IMPLEMENTED;

const get = NOT_IMPLEMENTED;

const add = NOT_IMPLEMENTED;

const remove = NOT_IMPLEMENTED;

module.exports = { initialize, get, add, remove };
