const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    name: {type: String, required: true},
    famille: {type: String, required: true}
});

module.exports = mongoose.model('Plant', plantSchema);