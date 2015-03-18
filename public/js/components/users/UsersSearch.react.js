var React = require('react');
var ServerActor = require('../../actions/users/UsersServerActors');

module.exports =  React.createClass({
	getInitialState:function(){
		return {
			search:""
		}
	},
	_search: function(event){
		this.setState({search: event.target.value});
		if(event.target.value.length > 0){
			
			ServerActor.search("name",event.target.value)
		}else{
			ServerActor.get();
		}
	},
  	render: function() {

	    return (
	      <div className="UsersSearch">
	      		<input type="text" value={this.state.search} onChange={this._search} />
	      </div>
	    );
  	},


});