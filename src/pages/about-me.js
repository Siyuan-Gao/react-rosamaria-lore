import React from 'react';
import Layout from '../layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// local imports
import PostHeader from '../components/styled/PostHeader';
import PostMeta from '../components/PostMetaComponent';
import PostComments from '../components/styled/PostComments';
import PostEntry from '../components/styled/PostEntry';
// contentful
import { queryAboutPage } from '../utils/queries';
import useContentful from '../hooks/useContentful';

function AboutMe() {
	let { data, errors } = useContentful(queryAboutPage);

	if (errors)
		return (
			<span style={{ color: 'red' }}>
				{errors.map((error) => error.message).join(',')}
			</span>
		);
	if (!data) return <p>Loading...</p>;
	const { json } = data.about.body;
	return (
		<Layout>
			<div className="container">
				<div id="content">
					<main className="">
						<article>
							<PostHeader>
								<h1>About Me:</h1>
							</PostHeader>
							<PostEntry className="about">
								{/* <PostBody content={json} /> */}
								{documentToReactComponents(json)}
							</PostEntry>
							<PostMeta />
							<PostComments />
						</article>
					</main>
				</div>
			</div>
		</Layout>
	);
}

export default AboutMe;
