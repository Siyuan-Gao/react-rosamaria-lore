import React from 'react';
// locals
import CatWidgetListItem from '../CatWidgetListItem';
import useContentful from '../../hooks/useContentful';
import { queryForCategories, categoriesCounter } from '../../utils/queries';

function CategoryList({ children }) {
	let { data, errors } = useContentful(queryForCategories);

	if (errors) {
		return <span>{errors.map((error) => error.message).join(',')}</span>;
	}
	if (!data) {
		return <p>Loading...</p>;
	}
	const { blogPostCollection } = data;
	// get counted object
	const catOBJ = categoriesCounter(blogPostCollection);
	// create arrays to seperate them
	const catNames = Object.keys(catOBJ);
	const catValues = Object.values(catOBJ);

	return (
		<div className="widget-categories widget">
			{children}
			<ul>
				{/* MAP through and combine => then display! */}
				{catNames.map((cat, idx) => (
					<CatWidgetListItem
						key={cat}
						name={cat}
						sum={catValues[idx]}
					/>
				))}
			</ul>
		</div>
	);
}

export default CategoryList;
