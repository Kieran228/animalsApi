//todo IMPORT OUR MYSQL POOL CONNECTION
const pool = require('../config/dpconfig');

class RestDao {



    constructor () {
        this.pool = pool;
    }


    findAll(req, res) {
        pool.query('SELECT * from animal_records', (err, rows) => {
            console.log(rows)

            res.send(rows)
        })
    }

    findIDOne(req, res) {
        pool.query('SELECT * from animal_records WHERE id = 1', (err, rows) => {
            console.log(rows);
            res.send(rows)
        })
    }
}

module.exports = RestDao;