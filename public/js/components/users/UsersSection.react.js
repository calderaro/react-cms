var React = require('react');

var usersStore = require('../../stores/UsersStore');
var viewActor = require('../../actions/users/UsersViewActors');
var serverActor = require('../../actions/users/UsersServerActors');

var UsersItem = require('./UsersItem.react')
var UsersSearch = require('./UsersSearch.react')
var UsersNew = require('./UsersNew.react')

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
	_new:function(){},
	_edit:function(){},
	_delete:function(){},
  	_onChange: function() {
  		this.setState(getState());
  	},
  	render: function() {
  		var users = this.state.users.map(function(user){
  			return(<UsersItem key={user._id} username={user.username} email={user.email} />)
  		});

	    return (
	      <div className="UsersSection">
	      		<UsersNew/>
	      		<UsersSearch />
	      		{users}
	      </div>
	    );
  	},


});
