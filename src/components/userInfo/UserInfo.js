import React from 'react';
import UserProfile from '../userProfile/UserProfile';

const UserInfo = ({user}) => (
	user ?
		(
			<div className='row'>
				<div className='col'>
					<UserProfile user={user}/>
				</div>	
			</div>
		) : null
);

export default UserInfo; 