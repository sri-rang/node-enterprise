const fs = require('fs');

class JsonStore {
    constructor(path) {
        this._path = path;
        if (!fs.existsSync(this._path)) fs.writeFileSync(this._path, '{}', 'utf-8');
        this._data_source = require(this._path);
    }

    save(data_source) {
        fs.writeFileSync(this._path, JSON.stringify(data_source), 'utf-8');
        this._data_source = data_source;
    }

    get() {
        return this._data_source;
    }

    delete() {
        fs.unlinkSync(this._path);
    }
}

module.exports = JsonStore;
