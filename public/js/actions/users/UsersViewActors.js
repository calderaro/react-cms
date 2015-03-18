var AppDispatcher = require('../../dispatcher/AppDispatcher');
var Constants = require('../../constants/Constants');;

var ActionTypes = Constants.ActionTypes;

module.exports = {

	select: function(itemID) {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.CLICK_ITEM,
	      _id: itemID
	    });
	},
	edit: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.EDIT_ITEM,
	    });
	},	
	new: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.NEW_ITEM,
	    });
	},
	cancel: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.CANCEL_ITEM,
	      	      
	    });
	},


};