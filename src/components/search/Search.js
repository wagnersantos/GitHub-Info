import React, {Component} from 'react';

class Search extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
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
					<form>
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

export default Search;