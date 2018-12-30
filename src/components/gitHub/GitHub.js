import React, {Component} from 'react';
import Search from '../search/Search';

class GitHub extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: null,
			repos: [],
		}
	}
	render(){
		return (
			<div className="container">
       			<Search />
      		</div>
		)
	}
}

export default GitHub;