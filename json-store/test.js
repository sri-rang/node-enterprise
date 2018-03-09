/* global describe, test, expect */

const assert = require('assert');
const fs = require('fs');
const JsonStore = require('./JsonStore');

let test_store;
const path = '/tmp/test_store.json';

describe('json-store', () => {
    test('should initialize', () => {
        test_store = new JsonStore(path);
        expect(fs.existsSync(path)).toBe(true);
    });

    test('should save and get', () => {
        test_store.save({ hello: 'world' });
        expect(test_store.get().hello).toBe('world');
    });

    test('should delete', () => {
        test_store.remove();
        expect(fs.existsSync(path)).toBe(false);
    });

    test('should initialize with source', () => {
        test_store = new JsonStore(path);
        test_store.save({ hello: 'world' });
        const test_store_2 = new JsonStore(path);
        expect(test_store_2.get().hello).toBe('world');
    });
});
