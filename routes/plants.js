const express = require('express');
const router = express.Router(); 
const plantCtrl = require('../controllers/plant');
const auth = require('../middleware/auth');

 router.post('/', plantCtrl.createPlant); 
 router.get('/', plantCtrl.getAllPlants);
/*router.put('/:id', auth, plantCtrl.modifyPlant);
router.delete('/:id', auth, plantCtrl.deletePlant);
router.get('/:id', auth, plantCtrl.getOnePlant);
router.get('/', auth, plantCtrl.getAllPlants); */

module.exports = router;
