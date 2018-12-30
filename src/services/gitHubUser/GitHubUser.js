const GitHubUser = {
	dataUser : '',
	dataRepos : '',
	getUSerByUsername(props){
		fetch(`https://api.github.com/users/${props}`)
		 .then(response => response.json())
		 .then(data => this.dataUser = data);
		 
		 return this.dataUser;
	},
	getReposByUsername(props){
		fetch(`https://api.github.com/users/${props}/repos`)
		 .then(response => response.json())
		 .then(data => this.dataRepos = data);

		 return this.dataRepos;
	}
}

export default GitHubUser;