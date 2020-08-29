import React from 'react';

// local imports
import DivMain from '../styled/DivMain';
import SpGrid from '../styled/SpGridUL';
import FreshArticle from './FreshArticle';
import GridArt from '../GridListItem';

function MainBar({ allPosts }) {
	return (
		<DivMain id="main">
			<SpGrid className="p-grid">
				<FreshArticle article={allPosts[0]} />
				{allPosts.splice(1).map((post) => (
					<GridArt key={post.sys.id} postInfo={post} />
				))}
			</SpGrid>
		</DivMain>
	);
}

export default MainBar;
