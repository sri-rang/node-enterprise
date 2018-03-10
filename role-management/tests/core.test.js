/* global describe, test, expect */

const fs = require('fs');
const role_management = require('../core');

const data_source_path = '/tmp/role_management_test_lib.json';
fs.existsSync(data_source_path) && fs.unlinkSync(data_source_path);

describe('role-management - core', () => {
    test('should initialize data source', () => {
        role_management.initialize(data_source_path);
        expect(role_management.get()).toEqual({});
    });

    test('should add roles for new user', () => {
        role_management.add('user_1', ['admin', 'user']);
        expect(role_management.get('user_1')).toEqual(['admin', 'user']);
    });

    test('should add roles for existing user', () => {
        role_management.add('user_1', ['manager']);
        expect(role_management.get('user_1')).toEqual(['admin', 'user', 'manager']);
    });

    test('should not add duplicate roles', () => {
        role_management.add('user_1', ['manager']);
        expect(role_management.get('user_1')).toEqual(['admin', 'user', 'manager']);
    });

    test('should remove roles', () => {
        role_management.remove('user_1', ['user', 'manager']);
        expect(role_management.get('user_1')).toEqual(['admin']);
    });

    test('should get empty set for new user', () => {
        expect(role_management.get('user_2')).toEqual([]);
    });

    test('should not fail when removing roles from unknown user', () => {
        role_management.remove('user_2', ['b', 'c']);
        expect(role_management.get('user_2')).toEqual([]);
    });

    test('should get all users and roles', () => {
        expect(role_management.get()).toEqual({ user_1: ['admin'], user_2: [] });
    });
});
