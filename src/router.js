var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/places', controller.getPlaces)
router.get('/range', controller.rangePlaces)
router.get('/near', controller.nearPlaces)
router.get('/sameDay', controller.sameDay)

module.exports = router;
