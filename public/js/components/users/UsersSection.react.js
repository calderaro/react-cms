var React = require('react');

var viewActor = require('../../actions/users/UsersViewActors');
var serverActor = require('../../actions/users/UsersServerActors');




function getState() {
  return {
  };
}

module.exports =  React.createClass({
	getInitialState:function(){
		return getState();
	},
	componentDidMount: function() {
    	//PurchasesStore.addChangeListener(this._onChange);		
  	},
	componentWillUnmount: function() {
		//PurchasesStore.removeChangeListener(this._onChange);
	},
	_new:function(){

	},
	_save:function(item){
		
	},
	_cancel:function(){

	},
	_search: function(){

	},
  	_onChange: function() {

  	},
  	render: function() {

	    return (
	      <div className="UsersSection">
	      		hola
	      </div>
	    );
  	},


});
