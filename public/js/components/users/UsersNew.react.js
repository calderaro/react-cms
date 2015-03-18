var React = require('react');
var ServerActor = require('../../actions/users/UsersServerActors');

module.exports =  React.createClass({
	getInitialState:function(){
		return {
			username:"",
			email:""
		}
	},
	handleChange: function(event){
		this.setState({
			username: this.refs.username.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		});
	},
	create: function(){
		ServerActor.create(this.state);
	},
  	render: function() {

	    return (
	      <div className="UsersSearch">
	      		<input type="text" ref="username" value={this.state.username} onChange={this.handleChange} />
	      		<input type="text" ref="email" value={this.state.email} onChange={this.handleChange} />
	      		<input type="submit" onClick={this.create} />
	      </div>
	    );
  	},


});