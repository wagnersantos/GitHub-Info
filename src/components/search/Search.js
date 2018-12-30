import React, {Component} from 'react';

class Search extends Component{
	render(){
		return (
			<div className='jumbotron'>
				<h1>GitHub Infos</h1>
				<div className='row'>
					<form>
						<div className='form-group'>
							<label>Username</label>
							<input type='text' className='form-control' placeholder ='Ex:wagnersantos'/>
						</div>
						<button type='submit' className='btn btn-primary'>Buscar</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Search;