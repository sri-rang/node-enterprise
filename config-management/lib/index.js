const fs = require('fs');
const helpers = require('./helpers');

let path_data_source = null;
let data_source = null;

const save = data_string => fs.writeFileSync(path_data_source, data_string, 'utf-8');

const initialize = (path, value) => {
    path_data_source = path;
    data_source = value;
    save(JSON.stringify(value));
};

const proceed_if_initialized = () => {
    if (!path_data_source || !data_source) throw new Error('config-management not initialized');
};

const get = name => {
    proceed_if_initialized();
    if (!name) return data_source;
    const context = helpers.get_context(name, data_source);
    return context[helpers.get_tail_name(name)];
};

const add = (name, value) => {
    proceed_if_initialized();
    const context = helpers.get_context(name, data_source);
    context[helpers.get_tail_name(name)] = value;
    save(JSON.stringify(data_source));
};

const remove = name => {
    proceed_if_initialized();
    if (!name) {
        data_source = {};
        save('{}');
    }
    const context = helpers.get_context(name, data_source);
    context[helpers.get_tail_name(name)] = null;
    save(JSON.stringify(data_source));
};

module.exports = { initialize, add, remove, get };
