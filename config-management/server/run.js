const server = require('./server');
const config_management = require('../lib');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
const data_source_path = process.env.DATA_SOURCE_PATH || '/tmp/config_management_dev.json';

config_management.initialize(data_source_path);
const instance = server(config_management);

instance.listen(port, host);
