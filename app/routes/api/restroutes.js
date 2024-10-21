//? IMPORTING OUR ANIMAL CLASS FROM THE DAO
const daoClass = require('../../dao/restdao');

//? Making a new object class from the "restdao" class template
const dao = new daoClass();

const express = require('express');
const router = express.Router();

router.get('/animal_records', (req, res) => {
    dao.findAll(req, res);
});

router.get('/one', (req, res) => {
    dao.findIDOne(req, res);
});

module.exports = router;