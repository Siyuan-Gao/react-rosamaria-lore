import React from 'react';
import * as links from '../utils/Constants';
import PostMetaStyled from './styled/PostMetaStyled';

const PostMeta = () => (
	<PostMetaStyled className="post-meta">
		<div className="meta-share">
			<span className="share-text">
				Share
				<a href={links.LINKEDIN_LINK}>
					<i className="fa fa-linkedin"></i>
				</a>
				<a href={links.TWITTER_LINK}>
					<i className="fa fa-twitter"></i>
				</a>
			</span>
		</div>
	</PostMetaStyled>
);

export default PostMeta;
