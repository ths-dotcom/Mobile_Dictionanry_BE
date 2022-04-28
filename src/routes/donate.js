const express = require('express');
const router = express.Router();
const DonateController = require('../app/controllers/DonateController');

router.post('/count', DonateController.Count);
router.post('/list', DonateController.List);
router.post('/create', DonateController.Create);
router.post('/delete', DonateController.Delete);
router.post('/bulk-delete', DonateController.BulkDelete);

module.exports = router;