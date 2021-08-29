const express = require('express');
const router = express.Router();

const propertyController = require('../controllers/property.controller');

// get all propertys
router.get('/', propertyController.getpropertyList);

// get property by ID
router.get('/:id',propertyController.getpropertyByID);

// create new property
router.post('/', propertyController.createNewproperty);

// update property
router.put('/:id', propertyController.updateproperty);

// delete property
router.delete('/:id',propertyController.deleteproperty);

module.exports = router;