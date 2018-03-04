const JsonStore = require('../../json-store/JsonStore');
const helpers = require('./helpers');

let store = null;

const initialize = (path, initial_value) => store = new JsonStore(path, initial_value);

const proceed_if_initialized = () => {
    if (!store) throw new Error('config-management not initialized');
};

const get = name => {
    proceed_if_initialized();
    if (!name) return store.get();
    const context = helpers.get_context(name, store.get());
    return context[helpers.get_tail_name(name)] || null;
};

const add = (name, value) => {
    proceed_if_initialized();
    const data = store.get();
    const context = helpers.get_context(name, data);
    context[helpers.get_tail_name(name)] = value;
    store.save(data);
    return true;
};

const remove = name => {
    proceed_if_initialized();
    if (!name) store.save({});
    else {
        const data = store.get();
        const context = helpers.get_context(name, data);
        context[helpers.get_tail_name(name)] = null;
        store.save(data);
    }
    return true;
};

module.exports = { initialize, add, remove, get };
