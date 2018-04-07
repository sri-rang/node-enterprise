/* global describe, test, expect */

const fs = require('fs');
const fetch = require('node-fetch');
const role_management = require('../core');
const server = require('../rest-api/server');

const data_source_path = '/tmp/role_management_test_server.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

role_management.initialize(data_source_path);
const instance = server(role_management);

describe('role-management - server', function () {
    test('wait for server to instantiate', done => {
        instance.listen(3001);
        setTimeout(() => done(), 0);
    });

    test('should initialize', () => {
        expect.assertions(1);
        return fetch('http://localhost:3001')
            .then(res => res.json())
            .then(body => expect(body).toEqual({}));
    });

    test('should add role for new user', () => {
        expect.assertions(1);
        return fetch('http://localhost:3001/user_1', {method: 'body', body: ["admin"]})
            .then(res => res.json())
            .then(body => expect(body).toEqual({}));
    });
});
