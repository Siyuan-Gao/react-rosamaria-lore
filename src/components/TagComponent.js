import React from 'react';
import { Link } from 'react-router-dom';
import TagLink from './styled/sidebar/TagLink';

const TagComponent = ({ tagInfo }) => (
	<TagLink>
		<Link
			to={{
				pathname: `/tag/${tagInfo}`,
				state: { tag: tagInfo },
			}}
		>
			<p>{tagInfo}</p>
		</Link>
	</TagLink>
);

export default TagComponent;
