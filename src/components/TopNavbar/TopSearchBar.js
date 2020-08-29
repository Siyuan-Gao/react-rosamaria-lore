import React, { useState } from 'react';
// local
import TopSearch from '../styled/TopSearch';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('## User searched for: ', searchTerm);
	};

	return (
		<TopSearch>
			<form id="searchForm" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search and hit enter..."
					name="searchTerm"
					id="desk-search"
					value={searchTerm}
					onChange={handleInput}
				/>
			</form>
			<i className="fas fa-search search-desktop"></i>
			<i className="fas fa-search search-toggle"></i>
		</TopSearch>
	);
}
