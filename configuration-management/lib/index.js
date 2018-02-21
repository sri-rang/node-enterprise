const fs = require('fs');

let path_data_source = null;
let data_source = null;

const save = data_string => fs.writeFileSync(path_data_source, data_string, 'utf-8');

const initialize = (path, value) => {
    path_data_source = path;
    data_source = value;
    save(JSON.stringify(value));
};

const proceed_if_initialized = () => {
    if (!path_data_source || !data_source) throw new Error('configuration not initialized');
};

const get_context = (name, context) => {
    if (!context) context = data_source;
    const is_nested = name.indexOf('.') > -1;
    if (is_nested) {
        const name_split = name.split('.');
        const head = name_split[0];
        const tail = name_split.slice(1).join('.');
        if (!context[head]) context[head] = {};
        return get_context(tail, context[head]);
    }
    else return context;
};

const get_tail_name = (name) => {
    return name.split('.').slice(-1);
};

const get = name => {
    proceed_if_initialized();
    if (!name) return data_source;
    const context = get_context(name);
    return context[get_tail_name(name)];
};

const add = (name, value) => {
    proceed_if_initialized();
    const context = get_context(name);
    context[get_tail_name(name)] = value;
    save(JSON.stringify(data_source));
};

const remove = name => {
    proceed_if_initialized();
    if (!name) {
        data_source = {};
        save('{}');
    }
    const context = get_context(name);
    context[get_tail_name(name)] = null;
    save(JSON.stringify(data_source));
};

module.exports = { initialize, add, remove, get };
