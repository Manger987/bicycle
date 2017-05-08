var mongoose = require('mongoose');

module.exports = mongoose.model('Bicycle', {
	marca: String,
	color: String,
	tipo: String,
    updated: { type: Date, default: Date.now }
});