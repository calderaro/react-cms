var React = require('react');

var viewActor = require('../../actions/users/UsersViewActors');


module.exports =  React.createClass({
  	render: function() {
	    return (
	      <div className="UserItem">
	      		<div>
					{this.props.username}
	      		</div>
	      		<div>
	      			{this.props.email}
	      		</div>
	      		
	      </div>
	    );
  	},


});
