var React = require('react');

var usersStore = require('../../stores/UsersStore');
var viewActor = require('../../actions/users/UsersViewActors');
var serverActor = require('../../actions/users/UsersServerActors');




function getState() {
  return {
  		users: usersStore.getAllChrono(),
  };
}

module.exports =  React.createClass({
	getInitialState:function(){
		return getState();
	},
	componentDidMount: function() {
    	usersStore.addChangeListener(this._onChange);	
    	serverActor.get();
  	},
	componentWillUnmount: function() {
		usersStore.removeChangeListener(this._onChange);
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
  		this.setState(getState());
  	},
  	render: function() {
  		console.log(this.state.users)
  		var users = this.state.users.map(function(user){
  			return(<div key={user._id}>{user.username}</div>)
  		});

	    return (
	      <div className="UsersSection">
	      		{this.state.users}
	      </div>
	    );
  	},


});
