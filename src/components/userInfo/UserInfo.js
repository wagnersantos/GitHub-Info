import React from 'react';
import UserProfile from '../userProfile/UserProfile';
import UserRepos from '../userRepos/UserRepos';

const UserInfo = ({user,repos}) => (
	user ?
		(
			<div className='row'>
				<div className='col'>
					<UserProfile user={user}/>
				</div>	
				<div className='col'>
					<UserRepos repos={repos}/>
				</div>
			</div>
		) : null
);

export default UserInfo; 