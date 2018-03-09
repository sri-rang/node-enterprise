/* global describe, test, expect */

const fs = require('fs');
const fetch = require('node-fetch');
const config_management = require('../core');
const server = require('../rest-api/server');

const data_source_path = '/tmp/config_management_test_server.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

config_management.initialize(data_source_path, {});
const instance = server(config_management);

describe('config-management - server', () => {

    test('wait for server to instantiate', done => {
        instance.listen(3000);
        setTimeout(() => done(), 1000);
    });

    test('should initialize', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000')
            .then(res => res.json())
            .then(body => expect(body).toBeDefined());
    });
    test('should post hello', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000/hello', { method: 'post', body: 'world' })
            .then(res => res.json())
            .then(body => expect(body).toBeDefined());
    });
    test('should get hello', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000/hello')
            .then(res => res.json())
            .then(body => expect(body).toBe('world'));
    });
    test('should put foo.bar', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000/foo', { method: 'put', body: 'bar' })
            .then(res => res.json())
            .then(body => expect(body).toBeDefined());
    });
    test('should delete foo', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000/foo', { method: 'delete' })
            .then(res => res.json())
            .then(body => expect(body).toBeDefined());
    });
    test('should post hello.world.foo', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000/she.sells.sea', { method: 'post', body: 'shells' })
            .then(res => res.json())
            .then(body => expect(body).toBeDefined());
    });
    test('should get all', () => {
        expect.assertions(1);
        return fetch('http://localhost:3000')
            .then(res => res.json())
            .then(body => expect(body).toEqual({ foo: null, hello: 'world', she: { sells: { sea: 'shells' } } }));
    });
    test('server should close', done => instance.close(() => done()));
});
