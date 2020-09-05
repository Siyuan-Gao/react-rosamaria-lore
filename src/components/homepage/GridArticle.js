import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LazyLoad from 'react-lazyload';

// local imports
import GridBody from '../posts/grid-body'; // specific parsing
import ArticlePost from '../styled/ArticlePost';
import PostImg from '../styled/PostImg';
import PostHeader from '../styled/PostHeader';
import PostEntry from '../styled/PostEntry';
import GridMeta from '../styled/GridMeta';

export default function GridArticle({ postInfo }) {
	// console.log(postInfo);
	return (
		<ArticlePost className="grid-item">
			<PostImg>
				<Link
					to={{
						pathname: `/posts/${postInfo.slug.toLowerCase()}`,
						state: { postID: postInfo.sys.id },
					}}
				>
					<LazyLoad>
						<img
							src={postInfo && postInfo.heroImage.url}
							alt={postInfo && postInfo.title}
						/>
					</LazyLoad>
				</Link>
			</PostImg>
			<PostHeader className="g">
				<span className="cat">
					<Link to="/">
						<p>{postInfo && postInfo.categories[0]}</p>
					</Link>
				</span>
				<h2>
					<Link
						to={{
							pathname: `/posts/${postInfo.slug.toLowerCase()}`,
							state: { postID: postInfo.sys.id },
						}}
					>
						<p>{postInfo && postInfo.title}</p>
					</Link>
				</h2>
			</PostHeader>
			<PostEntry>
				{/* {postInfo && postInfo.postDescription.length > 200
                        ? `${postInfo.postDescription.substring(0, 200)}...`
                        : postInfo.postDescription} */}
				<GridBody content={postInfo.body.json.content[0]} />
			</PostEntry>
			<GridMeta>
				<span className="date">
					{moment(postInfo.publishDate).format('MMM Do, YYYY')}
				</span>
			</GridMeta>
		</ArticlePost>
	);
}
