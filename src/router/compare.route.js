const { Router } = require('express');
const CompareController = require('../controller/compare.controller');
const middlewareCompare = require('../middlewares/compare.middleware');
const controller = new CompareController();
const router = Router();

router.post('/', middlewareCompare, controller.compareStrings);

module.exports = router;