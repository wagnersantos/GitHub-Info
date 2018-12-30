import React, {Component} from 'react';
import Search from '../search/Search';

class GitHub extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: null,
			repos: [],
		}
		this.updateUser = this.updateUser.bind(this); 
	}
	updateUser(user){
		this.setState({user: user});
	}
	render(){
		return (
			<div className="container">
       			<Search updateUser={this.updateUser} />
      		</div>
		)
	}
}

export default GitHub;