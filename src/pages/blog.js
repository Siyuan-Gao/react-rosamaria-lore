import React from 'react';
// local imports
import Layout from '../layout';
import Sidebar from '../components/homepage/Sidebar';
import PostArticle from '../components/styled/ListItemPosts';
import PostHeader from '../components/styled/PostHeader';
import DivMain from '../components/styled/DivMain';
// contenful Hook
import useContentful from '../hooks/useContentful';
import { queryAllPostsWithAuthors } from '../utils/queries';

export default function Blog() {
	let { data, errors } = useContentful(queryAllPostsWithAuthors);

	if (errors)
		return (
			<span style={{ color: 'red' }}>
				{errors.map((error) => error.message).join(',')}
			</span>
		);
	if (!data) return <p>Loading...</p>;
	const allPosts = data.blogPostCollection.items;

	return (
		<Layout>
			<main className="container">
				<div id="content">
					<PostHeader>
						<h1>ALL POSTS</h1>
					</PostHeader>
					<DivMain id="main">
						{allPosts.map((art) => (
							<PostArticle key={art.sys.id} content={art} />
						))}
					</DivMain>
					<Sidebar />
				</div>
			</main>
		</Layout>
	);
}
