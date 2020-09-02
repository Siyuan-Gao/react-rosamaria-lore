import React, { useState } from 'react';
// local imports
import Layout from '../layout';
import Sidebar from '../components/homepage/Sidebar';
import PostArticle from '../components/styled/ListItemPosts';
import PostHeader from '../components/styled/PostHeader';
import DivMain from '../components/styled/DivMain';
// contenful Hook
import useContentful from '../hooks/useContentful';
import { queryAllPosts } from '../utils/queries';

export default function Blog() {
	const [skip, setSkip] = useState(0);
	const [pageLimit, setPageLimit] = useState(6);
	let { data, errors } = useContentful(queryAllPosts(skip, pageLimit));

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
