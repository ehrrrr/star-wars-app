import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileCardList = (people) => {
	return (
		<div>
			{people.map((person, i) => {
				return <ProfileCard key={i} name={people[i].name} />;
			})}
		</div>
	);
};

export default ProfileCardList;
