/* global describe, test, expect */

const fs = require('fs');
const config_management = require('../core');

const data_source_path = '/tmp/config_management_test_lib.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

describe('config-management - core', () => {
    test('should initialize data source', () => {
        config_management.initialize(data_source_path);
        expect(config_management.get()).toEqual({});
    });

    test('should add `hello`', () => {
        config_management.add('hello', 'world');
        expect(config_management.get()).toEqual({ hello: 'world' });
    });

    test('should add `foo.bar`', () => {
        config_management.add('foo.bar', 'foo bar');
        expect(config_management.get()).toEqual({ hello: 'world', foo: { bar: 'foo bar' } });
    });

    test('should remove hello', () => {
        config_management.remove('hello');
        expect(config_management.get()).toEqual({ hello: null, foo: { bar: 'foo bar' } });
        expect(config_management.get('hello')).toBe(null);
    });

    test('should remove all', () => {
        config_management.remove();
        expect(config_management.get()).toEqual({});
        expect(config_management.get('hello')).toBe(null);
    });

    test('should initialize data source and retain hello world', () => {
        config_management.initialize(data_source_path);
        config_management.add('hello', 'world');
        expect(config_management.get()).toEqual({ hello: 'world' });
        config_management.initialize(data_source_path);
        expect(config_management.get()).toEqual({ hello: 'world' });
    });
});

