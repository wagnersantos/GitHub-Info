import React, {Component} from 'react';

class Search extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
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
							value={this.state.value}/>
						</div>
						<button type='submit' className='btn btn-primary'>Buscar</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Search;