import React from 'react';
import UserProfile from '../userProfile/UserProfile';
import UserRepos from '../userRepos/UserRepos';

const UserInfo = ({user,repos}) => (
	user ?
		(
			<div className='row'>
				<div className='col-lg-4'>
					<UserProfile user={user}/>
				</div>
				<div className='col-lg-8'>
					<UserRepos repos={repos} />
				</div>
			</div>
		) : null
);

export default UserInfo; 