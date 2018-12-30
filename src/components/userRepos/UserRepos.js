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
					<div className='thumbnail' key={index}>
						<div className='caption'>
							<h3>{repo.name}
								<span className='badge'>{repo.stargazers_count} STARS</span>
							</h3>
							<p>{repo.description}</p>
							<p>
								<a href={repo.html_url} className='btn btn-primary' role='button'>Repository</a>
								<a href={`${repo.html_url}/issues`} className='btn btn-default' role='button'>
								Issues ({repo.open_issues})</a>
							</p>
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