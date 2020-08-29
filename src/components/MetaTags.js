import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ Post }) => {
	return (
		<Helmet>
			{/* Test */}
			<title>{Post.title} – Lorain Ambrocio</title>
			<meta name="description" content={Post.postDescription} />
			<meta name="keywords" content={Post.tags} />
			<meta property="og:site_name" content="Lorain Ambrocio" />
			<meta
				property="og:title"
				content={`${Post.title} – Lorain Ambrocio`}
			/>
			<meta property="og:description" content={Post.postDescription} />
			<meta property="og:image" content={Post.heroImage.url} />
			<meta
				property="og:url"
				content={`https://lorainambrocio.com/posts/${Post.slug}`}
			/>
			{/* twitter */}
			<meta name="twitter:card" content="summary_large_image"></meta>
			<meta name="twitter:title" content={`${Post.title}`}></meta>
			<meta
				name="twitter:description"
				content={`${Post.postDescription}`}
			></meta>
			<meta name="twitter:creator" content="@lorainambro"></meta>
			<meta name="twitter:image" content={`${Post.heroImage.url}`}></meta>
		</Helmet>
	);
};

export default Meta;
