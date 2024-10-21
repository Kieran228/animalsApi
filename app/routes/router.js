//todo IMPORT EXPRESS PACKAGE
const express = require('express');





const router = express.Router();



router.use('/states', require('./api/restroutes'));

router.use('/animal_records', require('./api/typeroutes'));

module.exports = router;