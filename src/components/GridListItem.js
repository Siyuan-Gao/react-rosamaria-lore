import React from 'react';
import GridArticle from '../components/homepage/GridArticle';

const GridArt = ({ postInfo }) => (
	<li>
		<GridArticle className="grid-item" postInfo={postInfo} />
	</li>
);

export default GridArt;
