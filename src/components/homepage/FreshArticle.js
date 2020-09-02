import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LazyLoad from 'react-lazyload';

// local
import ArticlePost from '../styled/ArticlePost';
import FreshBody from '../posts/fresh-body';
import SocialShareUniversal from '../SocialShare';
import PostHeader from '../styled/PostHeader';
import PostImg from '../styled/PostImg';
import PostEntry from '../styled/PostEntry';
import PostMeta from '../styled/PostMetaStyled';

function ArticleComponent({ article }) {
	return (
		<ArticlePost>
			<PostHeader className="fresh">
				<span className="cat">
					<Link
						to={{
							pathname: `/category/${article.categories[0].toLowerCase()}`,
							state: { category: article.categories[0] },
						}}
					>
						<p>{article && article.categories[0]}</p>
					</Link>
				</span>
				<h2>
					<Link
						to={{
							pathname: `/posts/${article.slug.toLowerCase()}`,
							state: { postID: article.sys.id },
						}}
					>
						<p>{article && article.title}</p>
					</Link>
				</h2>
				{/* {console.log(article.publishDate)} */}
				<span className="date published">
					{moment(article.publishDate).format('MMM Do, YYYY')}
				</span>
			</PostHeader>
			<PostImg>
				<Link
					to={{
						pathname: `/posts/${article.slug.toLowerCase()}`,
						state: { postID: article.sys.id },
					}}
				>
					<LazyLoad>
						<img
							src={article && article.heroImage.url}
							alt={article && article.title}
						/>
					</LazyLoad>
				</Link>
			</PostImg>
			<PostEntry>
				<p>
					<FreshBody content={article.body.json.content[0]} />
				</p>
				<Link
					// to={`/posts/${article.slug.toLowerCase()}`}
					to={{
						pathname: `/posts/${article.slug.toLowerCase()}`,
						state: { postID: article.sys.id },
					}}
				>
					<p className="more-link">
						<span className="more-button">Continue Reading</span>
					</p>
				</Link>
			</PostEntry>
			<PostMeta>
				<SocialShareUniversal
					title={article.title}
					pathname={article.slug}
				/>
			</PostMeta>
		</ArticlePost>
	);
}

ArticleComponent.propTypes = {
	blogPost: PropTypes.shape({
		title: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		publishDate: PropTypes.instanceOf(Date).isRequired,
		heroImage: PropTypes.object.isRequired,
		body: PropTypes.string.isRequired,
		categories: PropTypes.array.isRequired,
		tags: PropTypes.array.isRequired,
		author: PropTypes.object.isRequired,
	}),
};

export default ArticleComponent;
