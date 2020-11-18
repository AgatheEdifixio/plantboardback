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
        console.log('objet crée : ', result);
        res.status(201).json({ message: 'Objet enregistré !'})
    })
        .catch(error => res.status(400).json({ error : 'erreur dans catch create plant '}));
};

exports.modifyPlant = (req, res, next) => {
    console.log("backend modifyplant");
    Plant.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(function(result) {
            console.log('object modifié', result);
            res.status(200).json({ message: 'Objet modifié !'})
        })
        .catch(error => res.status(400).json({ error : 'erreur dans catch plant'}));
};

exports.deletePlant = (req, res, next) => {
    console.log('id plant from req :', req.params.id);
    Plant.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Plant supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.getOnePlant = (req, res, next) => {
    Plant.findOne({ _id: req.params.id })
    .then(plant => res.status(200).json(plant))
    .catch(error => res.status(404).json({ error }));
}; 

exports.getAllPlants = (req, res, next) => {
    Plant.find()
    .then(plants => res.status(200).json(plants))
    .catch(error => res.status(400).json({ error : 'dans getAllPlants'}))
};
