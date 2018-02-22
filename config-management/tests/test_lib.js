const assert = require('assert');
const config_management = require('../lib');

const should_initialize_data_source = () => {
    config_management.initialize('/tmp/test_data.json', {});
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

should_initialize_data_source();
should_add_hello_world();
should_add_nested();
should_remove();
