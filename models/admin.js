const db = require ('../db');
const mongoose = require ('mongoose');
const ObjectId  = mongoose.Types.ObjectId;
const Schema = require ('schema-js');


const adminSchema = new Schema({
	login: String,
	password: String,
});
const Admin = mongoose.model('Admin', adminSchema);

exports.createAdmin = (adminData, cb)=> {
	db.get().collection('admin').insertOne(adminData, (err, result) =>{
		cb(err, result);
	})

};

exports.findById = (id, cb) => {
	db.get().collection('admin').findOne({_id: ObjectId(id)}, (err, result)=>{
		cb(err, result);
	});
};

exports.delete = function (id, cb){
	db.get().collection('admin').deleteOne(
		{_id: ObjectId(id)},
		function (err, result) {
			cb(err,result);
		}
	)
};

