const GitHubUser = {
	dataUser : '',
	dataRepos : '',
	getUserByUsername(props){
		return fetch(`https://api.github.com/users/${props}`)
	},
	getReposByUsername(props){
		return fetch(`https://api.github.com/users/${props}/repos`)		 
	}
}

export default GitHubUser;