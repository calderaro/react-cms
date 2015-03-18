var userModel = require("../models/user")


module.exports =  {
	index: function(req,res){
		
		userModel.find({}).exec(function(err,items){
			if (!err) {
		        res.json({err:false,users: items})
		    }else{
		    	res.json({err:err});
		    }
			
		});
	},
	new: function(req,res){
		var user =  new userModel({
			provider: 		req.query.name,
		    items: 		req.query.rif,
		});
		user.save(function(err,item){
			if(err){
				res.json({err:err})
			}else{
				res.json({user:item})
			}
		});
	},
	delete: function(req,res){

		userModel.remove({ _id: req.query._id }, function(err) {
		    if (!err) {
		        res.json({err:false});
		    }
		    else {
		        res.json({err:err});
		    }
		});
	},
	update: function(req,res){
		var user =  new userModel({
			provider: 		req.query.name,
		    items: 		req.query.rif,
		});

		var upsertData = user.toObject();

		delete upsertData._id;

		userModel.update({_id: req.query._id}, upsertData, {upsert: true}, function(err){
			if (!err) {
		        res.json({err:false, result: "success"});
		    }
		    else {
		        res.json({err:err});
		    }
		});
	},

	show:function(req,res){
		userModel.findOne({_id: req.body.id}).exec(function(err,item){
			if (!err) {
		        res.json({ result: err, user: item});
		    }
		    else {
		        res.json({ err: err});
		    }
		    
		});
	}

}