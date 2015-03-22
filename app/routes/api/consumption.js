var Consumption = require('../../models/consumption');

module.exports.addConsumption = function(req, res) {
	var consumption = new Consumption(req.body.consumption);
	consumption.save(function(err) {
		if (err) { res.send(err); }
		res.json({ consumption: consumption });
	});
};

module.exports.getAllConsumptions = function(req, res) {
	Consumption.find()
		// .populate('_consumer _consumable')
		.exec(function(err, consumptions) {
		if (err) { res.send(err); }
		res.json({ consumptions: consumptions });
	});
};

module.exports.getSingleConsumption = function(req, res, id) {
	Consumption.findById(id)
		// .populate('_consumer _consumable')
		.exec(function(err, consumption) {
			if (err) { res.send(err); }
			res.json({ consumption: consumption });
		});
};

module.exports.updateConsumption = function(req, res, id) {
	Consumption.findByIdAndUpdate(id, {$set: req.body.consumption}, function(err, consumption) {
		if (err) { res.send(err); }
		res.json({ consumption: consumption });
	});
};

module.exports.deleteConsumption = function(req, res, id) {
	Consumption.findByIdAndRemove(id, function(err) {
		if (err) { res.send(err); }
		res.send(200);
	});
};