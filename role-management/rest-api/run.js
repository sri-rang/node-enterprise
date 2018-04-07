const server = require('./server');
const role_management = require('../core');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
const data_source_path = process.env.DATA_SOURCE_PATH || '/tmp/role_management_dev.json';

role_management.initialize(data_source_path);
const instance = server(role_management);

instance.listen(port, host);
