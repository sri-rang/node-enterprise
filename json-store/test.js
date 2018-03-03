const assert = require('assert');
const fs = require('fs');
const JsonStore = require('./JsonStore');

let test_store;
const path = '/tmp/test_store.json';

const should_initialize = () => {
    test_store = new JsonStore(path);
    assert(fs.existsSync(path));
};

const should_save_and_get = () => {
    test_store.save({ hello: 'world' });
    assert(test_store.get().hello === 'world');
};

const should_delete = () => {
    test_store.remove();
    assert(!fs.existsSync(path));
};

const should_initialize_with_source = () => {
    should_initialize();
    should_save_and_get();
    const test_store_2 = new JsonStore(path);
    assert(test_store_2.get().hello === 'world');
};

should_initialize();
should_save_and_get();
should_delete();
should_initialize_with_source();
