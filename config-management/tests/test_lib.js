const assert = require('assert');
const fs = require('fs');
const config_management = require('../lib');

const data_source_path = '/tmp/config_management_test_lib.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

const should_initialize_data_source = () => {
    config_management.initialize(data_source_path);
    const actual = JSON.stringify(config_management.get());
    const expected = '{}';
    assert(actual === expected);
};

const should_add_hello_world = () => {
    config_management.add('hello', 'world');
    const actual = JSON.stringify(config_management.get());
    const expected = '{"hello":"world"}';
    assert(actual === expected);
    assert(config_management.get('hello') === 'world');
};

const should_add_nested = () => {
    config_management.add('foo.bar', 'foo bar');
    const actual = JSON.stringify(config_management.get());
    const expected = '{"hello":"world","foo":{"bar":"foo bar"}}';
    assert(actual === expected);
    assert(config_management.get('foo.bar') === 'foo bar');
};

const should_remove = () => {
    config_management.remove('hello');
    const actual = JSON.stringify(config_management.get());
    const expected = '{"hello":null,"foo":{"bar":"foo bar"}}';
    assert(actual === expected);
    assert(config_management.get('hello') === null);
};

const should_empty = () => {
    config_management.remove();
    const actual = JSON.stringify(config_management.get());
    const expected = '{}';
    assert(actual === expected);
    assert(config_management.get('hello') === null);
};

const should_initialize_data_source_and_retain_hello_world = () => {
    config_management.initialize(data_source_path);
    const actual = JSON.stringify(config_management.get());
    const expected = '{"hello":"world"}';
    assert(actual === expected);
};

should_initialize_data_source();
should_add_hello_world();
should_add_nested();
should_remove();
should_empty();
should_add_hello_world();
should_initialize_data_source_and_retain_hello_world();
