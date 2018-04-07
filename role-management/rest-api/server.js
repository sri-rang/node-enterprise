const http = require('http');

const serve = (res, code, body) => {
    res.statusCode = code;
    res.end(JSON.stringify(body));
};

module.exports = role_management => http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => body = body + chunk);
    req.on('end', () => {
        const url = req.url.substr(1);
        const method = req.method.toLowerCase();

        res.setHeader('Content-Type', 'application/json');

        // read
        if (method === 'get') serve(res, 200, role_management.get(url));

        // create new item
        else if (method === 'post') serve(res, 200, role_management.add(url, JSON.parse(body)));

        // update item
        else if (method === 'put') serve(res, 200, role_management.add(url, JSON.parse(body)));

        // remove item
        else if (method === 'delete') {
            if (!url) serve(res, 400, { message: 'Missing item name `/{name}`' });
            else serve(res, 200, role_management.remove(url));
        }

        // bad request
        else serve(res, 404, { message: 'Resource not found' });
    });
});
