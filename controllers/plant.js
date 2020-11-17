const Plant = require('../models/Plant');

exports.createPlant = (req, res, next) => {
    delete req.body._id;
    const plant = new Plant({
        ...req.body
    });
    plant.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyPlant = (req, res, next) => {

};

exports.deletePlant = (req, res, next) => {

};

exports.getOnPlant = (req, res, next) => {
    
}; 

exports.getAllPlants = (req, res, next) => {

};
