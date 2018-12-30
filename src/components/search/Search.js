import React, {Component} from 'react';
import GitHubUser from '../../services/gitHubUser/GitHubUser';
import PropTypes from 'prop-types';

class Search extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit (event){
		event.preventDefault();
		let responseUser = GitHubUser.getUSerByUsername(this.state.value);
		let responseRepos = GitHubUser.getReposByUsername(this.state.value);

		this.props.updateUser(responseUser);
		this.props.updateRepos(responseRepos);
	}
	handleChange(event) {
	    event.preventDefault();
	    this.setState({value: event.target.value});
	 }
	render(){
		return (
			<div className='jumbotron'>
				<h1>GitHub Infos</h1>
				<div className='row'>
					<form onSubmit={this.handleSubmit}>
						<div className='form-group'>
							<label>Username</label>
							<input type='text' className='form-control' placeholder ='Ex:wagnersantos'
							value={this.state.value} onChange={this.handleChange} />
						</div>
						<button type='submit' className='btn btn-primary'>Buscar</button>
					</form>
				</div>
			</div>
		)
	}
}

SearchUser.propTypes = {
	updateUser: PropTypes.func.isRequired,
	updateRepos: PropTypes.func.isRequired,
	responseUser: PropTypes.object,
	responseRepos: PropTypes.array,
}

export default Search;