import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
// LOCAL IMPORTs
import Layout from '../../layout';
import DivMain from '../../components/styled/DivMain';
import Sidebar from '../../components/homepage/Sidebar';
import ArticlePost from '../../components/styled/ArticlePost';
import PostHeader from '../../components/styled/PostHeader';
import PostImg from '../../components/styled/PostImg';
import PostEntry from '../../components/styled/PostEntry';
import PostBody from '../../components/posts/post-body';
import PostMeta from '../../components/styled/PostMetaStyled';
import Meta from '../../components/MetaTags';

// contentful stuff
import useContentful from '../../hooks/useContentful';
import {
	qeuryPostsToMatchSlugs,
	userCameFromOutside,
} from '../../utils/queries';

export default function Post(props) {
	const { params } = useRouteMatch('/posts/:slug');
	const { pathname } = useLocation();

	// ! 1. query for slugs
	let { data, errors } = useContentful(qeuryPostsToMatchSlugs);

	if (!data) {
		return <p>Loading...</p>;
	}
	if (errors) {
		return <p>{errors.map((error) => error.message).join(',')}</p>;
	}
	if (data) {
		const Post = userCameFromOutside(params.slug, data);
		// console.log(Post);
		return (
			<Layout>
				<Meta Post={Post} />
				<main className="container">
					<div id="content">
						<DivMain id="main">
							<ArticlePost>
								<PostHeader>
									<span className="cat">
										<Link to="/">
											<p>{data && Post.categories}</p>
										</Link>
									</span>
									<h2>
										<p>{data && Post.title}</p>
									</h2>
									<span className="date published">
										{moment(
											data && Post.publishDate
										).format('MMM Do, YYYY')}
									</span>
								</PostHeader>
								<PostImg>
									<Link to="/">
										<img
											src={data && Post.heroImage['url']}
											alt={data && Post.title}
										/>
									</Link>
								</PostImg>
								<PostEntry>
									{/* <p>{data && Post.body}</p> */}
									<PostBody content={Post.body.json} />
								</PostEntry>
								<PostMeta>
									<div className="meta-share">
										<span className="share-text">
											Share
										</span>
										<a
											href={`https://www.linkedin.com/shareArticle?&mini=true&url=https://lorainambrocio.com${pathname}&title=${Post.title}`}
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="fa fa-linkedin"></i>
										</a>
										<a
											href={`https://twitter.com/intent/tweet?url=https://lorainambrocio.com${pathname}&text=Check%20out%20this%20article:%20${Post.title}`}
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="fa fa-twitter"></i>
										</a>
									</div>
								</PostMeta>
							</ArticlePost>
						</DivMain>
						<Sidebar />
					</div>
				</main>
			</Layout>
		);
	}
}
