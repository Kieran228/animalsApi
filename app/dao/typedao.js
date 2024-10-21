const pool = require('../config/dpconfig');

class TypeDao {


    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        pool.query('SELECT * from animal_records', (err, rows) => {
            console.log(rows);
            res.send(rows);
        })
    }
};

module.exports = TypeDao;