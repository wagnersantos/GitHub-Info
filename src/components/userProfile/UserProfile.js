import React from 'react';

const UserProfile = ({user}) => (
	<div>
		<img className='rounded-circle' src={user.avatar_url} alt='avatar' width='140' 
			height='140'/>
		<h2>{user.login}</h2>
		<p>{user.name}</p>
		<p>Followers: {user.followers} / Following: {user.following}</p>
		<p><a className='btn btn-secondary' href={user.html_url} role ='button'>View details</a></p>
	</div>
)

export default UserProfile;