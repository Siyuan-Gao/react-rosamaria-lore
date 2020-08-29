import React from 'react';
import WidgetCatLi from './styled/WidgetCatLi';

const CatWidgetListItem = ({ name, sum }) => (
	<WidgetCatLi>
		<a href={`/category/${name}`}>{name}</a>({sum})
	</WidgetCatLi>
);

export default CatWidgetListItem;
