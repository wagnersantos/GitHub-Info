import React, {Component} from 'react';

class UserRepos extends Component{
	constructor(props) {
	    super(props);
	    this.count = 0;
	}
	render(){
		    this.count = this.props.repos.length;
			const repos = this.props.repos.map( (repo,index) =>
				(
					<div className='card mb-4' key={index}>
						<div className='card-body'>
							<div className='card-title'>
								<h3>{repo.name}
									<span className='badge badge-pill badge-secondary ml-2'
									  	style={{fontSize: 12}}>{repo.stargazers_count} STARS
									</span>
								</h3>
								<p>{repo.description}</p>
								<p>
									<a href={repo.html_url} className='btn btn-dark' 
										role='button'>Repository</a>
									<a href={`${repo.html_url}/issues`} className='btn btn-secondary ml-2' 
										role='button'>
									Issues ({repo.open_issues})</a>
								</p>
							</div>
						</div>
					</div>
				)
			)
		
			return(
				<div>
					<h2>{this.count} Repositories</h2>
					{repos}
				</div>
			)
	}
}

export default UserRepos;