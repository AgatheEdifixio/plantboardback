const Plant = require('../models/Plant');

exports.createPlant = (req, res, next) => {
    console.log("createPlant ctrl");
   /*  delete req.body._id; */
    const plant = new Plant({
      name: req.body.name,
      famille: req.body.famille
    });
    plant.save()
    .then(function(result) {
        console.log("objet : ", result);
        res.status(201).json({ message: 'Objet enregistré !'})
    })
        .catch(error => res.status(400).json({ error : 'erreur dans catch create plant '}));
};

exports.modifyPlant = (req, res, next) => {


};

exports.deletePlant = (req, res, next) => {
    console.log('id plant from req :', req.params.id);
    Plant.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Plant supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.getOnPlant = (req, res, next) => {
    
}; 

exports.getAllPlants = (req, res, next) => {
    Plant.find()
    .then(plants => res.status(200).json(plants))
    .catch(error => res.status(400).json({ error : 'dans getAllPlants'}))
};
