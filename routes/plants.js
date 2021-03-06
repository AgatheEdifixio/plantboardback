const express = require('express');
const router = express.Router(); 
const plantCtrl = require('../controllers/plant');
const auth = require('../middleware/auth');

/*  router.post('/', plantCtrl.createPlant); 
 router.get('/', plantCtrl.getAllPlants);
 router.get('/:id', plantCtrl.getOnePlant); 
 router.delete('/:id', plantCtrl.deletePlant);
 router.put('/:id', plantCtrl.modifyPlant); */

  router.post('/', auth, plantCtrl.createPlant); 
 router.get('/', auth, plantCtrl.getAllPlants);
 router.get('/:id', auth, plantCtrl.getOnePlant); 
 router.delete('/:id', auth, plantCtrl.deletePlant);
 router.put('/:id', auth, plantCtrl.modifyPlant); 
 
module.exports = router;
