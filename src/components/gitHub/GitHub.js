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
		this.updateRepos = this.updateRepos.bind(this);
	}
	updateUser(user){
		this.setState({user: user});
	}
	updateRepos(repos){
		this.setState({repos: repos});
	}
	render(){
		return (
			<div className="container">
       			<Search updateUser={this.updateUser} updateRepos={this.updateRepos} />
      		</div>
		)
	}
}

export default GitHub;