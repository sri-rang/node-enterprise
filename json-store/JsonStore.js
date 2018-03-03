const fs = require('fs');

const encoding = 'utf-8';

class JsonStore {
    constructor(path) {
        this._path = path;
        if (!fs.existsSync(this._path)) {
            fs.writeFileSync(this._path, '{}', encoding);
        }
    }

    save(data) {
        fs.writeFileSync(this._path, JSON.stringify(data), encoding);
    }

    get() {
        return JSON.parse(fs.readFileSync(this._path, encoding));
    }

    remove() {
        fs.unlinkSync(this._path);
    }
}

module.exports = JsonStore;
