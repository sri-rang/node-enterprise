const assert = require('assert');
const fs = require('fs');
const fetch = require('node-fetch');
const config_management = require('../core');
const server = require('../rest-api/server');

let body;
const failed = message => {
    console.error('Failed:', message);
    console.error(body);
    process.exit(1);
};

const reset_timeout = () => {
    if (reset_timeout.timer) clearTimeout(reset_timeout.timer);
    reset_timeout.timer = setTimeout(() => process.exit(0), 5000);
};

const data_source_path = '/tmp/config_management_test_server.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

config_management.initialize(data_source_path, {});
const instance = server(config_management);

instance.listen(3000, () => {

    reset_timeout();

    // should initialize
    fetch('http://localhost:3000')
        .then(res => res.text())
        .then(res => body = res)
        .then(() => assert(body === '{}'))
        .then(() => reset_timeout())
        .catch(() => failed('should initialize'));

    // should add hello world
    fetch('http://localhost:3000/hello', { method: 'post', body: 'world' })
        .then(res => res.json())
        .then(res => body = res)
        .then(() => assert(body))
        .then(() => reset_timeout())
        .catch(() => failed('should add hello world'));

    // should read hello world
    fetch('http://localhost:3000/hello')
        .then(res => res.json())
        .then(res => body = res)
        .then(() => assert(body === 'world'))
        .then(() => reset_timeout())
        .catch(() => failed('should read hello world'));

    // should update foo bar
    fetch('http://localhost:3000/foo', { method: 'put', body: 'bar' })
        .then(res => res.json())
        .then(res => body = res)
        .then(() => assert(body))
        .then(() => reset_timeout())
        .catch(() => failed('should update foo bar'));

    // should verify state
    fetch('http://localhost:3000')
        .then(res => res.text())
        .then(res => body = res)
        .then(() => assert(body === '{"hello":"world","foo":"bar"}'))
        .then(() => reset_timeout())
        .catch(() => failed('should read hello world and foo bar'));

    // should remove foo bar
    fetch('http://localhost:3000/foo', { method: 'delete' })
        .then(res => res.json())
        .then(res => body = res)
        .then(() => assert(body))
        .then(() => reset_timeout())
        .catch(() => failed('should remove foo bar'));

    // should verify state
    fetch('http://localhost:3000')
        .then(res => res.text())
        .then(res => body = res)
        .then(() => assert(body === '{"hello":"world","foo":null}'))
        .then(() => reset_timeout())
        .catch(() => failed('foo bar must be removed'));

    // should add hello.world.foo bar
    fetch('http://localhost:3000/she.sells.sea', { method: 'post', body: 'shells' })
        .then(res => res.json())
        .then(res => body = res)
        .then(() => assert(body))
        .then(() => reset_timeout())
        .catch(() => failed('should add hello.world.foo bar'));

    // should verify state
    fetch('http://localhost:3000')
        .then(res => res.text())
        .then(res => body = res)
        .then(() => assert(body === '{"hello":"world","foo":null,"she":{"sells":{"sea":"shells"}}}'))
        .then(() => reset_timeout())
        .catch(() => failed('should read hello world and foo bar'));
});
