const fs = require('fs');
const helpers = require('./helpers');

const EMPTY_DATA_SOURCE = {};

let data_source_path = null;
let data_source = null;

const save = data_string => fs.writeFileSync(data_source_path, data_string, 'utf-8');

const initialize = (path, initial_value) => {
    data_source_path = path;
    if (fs.existsSync(path)) data_source = JSON.parse(fs.readFileSync(path, 'utf-8'));
    else {
        data_source = Object.assign({}, initial_value || EMPTY_DATA_SOURCE);
        save(JSON.stringify(initial_value));
    }
};

const proceed_if_initialized = () => {
    if (!data_source_path || !data_source) throw new Error('config-management not initialized');
};

const get = name => {
    proceed_if_initialized();
    if (!name) return data_source;
    const context = helpers.get_context(name, data_source);
    return context[helpers.get_tail_name(name)] || null;
};

const add = (name, value) => {
    proceed_if_initialized();
    const context = helpers.get_context(name, data_source);
    context[helpers.get_tail_name(name)] = value;
    save(JSON.stringify(data_source));
    return true;
};

const remove = name => {
    proceed_if_initialized();
    if (!name) data_source = EMPTY_DATA_SOURCE;
    else {
        const context = helpers.get_context(name, data_source);
        context[helpers.get_tail_name(name)] = null;
    }
    save(JSON.stringify(data_source));
    return true;
};

module.exports = { initialize, add, remove, get };
