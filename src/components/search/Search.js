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
		if(this.state.value !== ''){
			GitHubUser.getUserByUsername(this.state.value)
				.then(response => response.json())
		    	.then(data => {this.props.updateUser(data)});
			
			GitHubUser.getReposByUsername(this.state.value)
				.then(response => response.json())
		    	.then(data => {this.props.updateRepos(data)});

		}else{
			alert('Preencha o campo');
		}
	}
	handleChange(event) {
	    this.setState({value: event.target.value});
	}
	render(){
		return (
			<div className='jumbotron'>
				<h1>GitHub Infos</h1>
				<div className='row'>
					<form onSubmit={this.handleSubmit} style={{width: '100%'}}>
						<div className="input-group mb-3">
							<input type='text' className='form-control' 
								placeholder ='Digite um nome de usuario Ex: wagnersantos'
								value={this.state.value} 
								onChange={this.handleChange} />
						</div>
						<input type='submit' className='btn btn-dark' value='Buscar' />
					</form>
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	updateUser: PropTypes.func.isRequired,
	updateRepos: PropTypes.func.isRequired,
	responseUser: PropTypes.object,
	responseRepos: PropTypes.array,
}

export default Search;