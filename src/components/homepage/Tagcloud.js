import React from 'react';
// locals
import TagComponent from '../TagComponent';
import useContentful from '../../hooks/useContentful';
import { queryForTags, uniquePostTags } from '../../utils/queries';

function Tagcloud({ children }) {
	let { data, errors } = useContentful(queryForTags);

	if (!data) {
		return <p>Loading...</p>;
	}
	if (errors) {
		return <span>{errors.map((error) => error.message).join(',')}</span>;
	}
	// console.log(data);
	const { blogPostCollection } = data;
	const tags = uniquePostTags(blogPostCollection);
	return (
		<div className="widget">
			{children}
			<div className="tagcloud">
				{tags.map((tag) => (
					<TagComponent key={tag} tagInfo={tag} />
				))}
			</div>
		</div>
	);
}

export default Tagcloud;
