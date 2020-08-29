import React from 'react';

// func components
const SocialShareUniversal = ({ title, pathname }) => (
	<div className="meta-share">
		<span className="share-text">Share</span>
		<a
			href={`https://www.linkedin.com/shareArticle?&mini=true&url=https://lorainambrocio.com/posts/${pathname}&title=${title}`}
		>
			<i className="fa fa-linkedin"></i>
		</a>
		<a
			href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${title}&url=https://lorainambrocio.com/posts/${pathname}`}
			rel="noopener noreferrer"
			target="_blank"
		>
			<i className="fa fa-twitter"></i>
		</a>
	</div>
);

export default SocialShareUniversal;
