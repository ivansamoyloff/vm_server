const Admin = require('../models/admin');
const crypto = require('crypto');

exports.insert = (req, res) =>{
	let salt = crypto.randomBytes(16).toString('base64');
	let hash = crypto.createHmac('sha256', salt).update(req.body.password).digest('base64');

	req.body.password = salt+"$"+hash;
	Admin.createAdmin(req.body, function(err, result){
	if(err){
		console.log(err);
		return res.sendStatus(500);
	}
	res.send(result.insertedId)
	});
};

exports.getById = (req, res) => {
	Admin.findById(req.body, function (err, result) {
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(result);
	});
};

exports.delete = (req, res) => {
	Admin.delete(req.body, function (err, result) {
		if (err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(result);
	})
};

exports.isPasswordAndUserMatch = (req, res, next) => {
	Admin.findById()
};