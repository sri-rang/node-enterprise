const JsonStore = require('../../json-store/JsonStore');

let store = null;

const proceed_if_initialized = () => {
    if (!store) throw new Error('role-management not initialized');
};

const initialize = path => store = new JsonStore(path);

const get = user => {
    proceed_if_initialized();
    const all = store.get();
    return user ? all[user] || [] : all;
};

const add = (user, roles) => {
    proceed_if_initialized();
    const data = store.get();
    const existing_roles = data[user] || [];
    const set = new Set(existing_roles);
    roles.forEach(role => set.add(role));
    data[user] = Array.from(set);
    store.save(data);
};

const remove = (user, roles) => {
    proceed_if_initialized();
    const data = store.get();
    if (!roles) data[user] = [];
    else {
        const set = new Set(data[user]);
        roles.forEach(role => set.has(role) && set.delete(role));
        data[user] = Array.from(set);
    }
    store.save(data);
};

module.exports = { initialize, get, add, remove };
