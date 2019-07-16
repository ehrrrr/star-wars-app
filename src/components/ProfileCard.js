import React from 'react';

const ProfileCard = () => {
	return (
		<article className="mw5 center dib grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<div className="tc">
				<img
					alt="An image"
					src="http://tachyons.io/img/avatar_1.jpg"
					title="Photo of a kitty staring at you"
					className="br-100 h3 w3 dib"
				/>
				<h1 className="f4">Cat </h1>
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<p className="lh-copy measure center f6 black-70">
				Quite affectionate and outgoing. She loves to get chin scratches and will roll around on the floor
				waiting for you give her more of them.
			</p>
		</article>
	);
};

export default ProfileCard;
