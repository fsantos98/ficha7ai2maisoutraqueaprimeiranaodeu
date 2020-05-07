const express = require('express');
const router = express.Router();
const filmescontroller = require('../controllers/filmescontrollers')

router.get('/list', filmescontroller.list);
router.get('/list2', filmescontroller.list2);
router.get('/get/:id', filmescontroller.get);
router.post('/create', filmescontroller.create);
router.get('/test', filmescontroller.test);
router.put('/update/:id', filmescontroller.update);

module.exports = router;