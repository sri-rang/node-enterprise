const server = require('./server');
const config_management = require('../lib');

config_management.initialize('/tmp/config_management_dev.json', {});
const instance = server(config_management);
instance.listen(3000);
