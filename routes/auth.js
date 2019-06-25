const express = require('express');
const router = express.Router();
const adminController = require('../controlers/admin');

router.get('/',
	adminController.insert
);
router.get('/:id',
	adminController.getById
);
router.delete('/:id',
	adminController.delete
);

module.exports = router;