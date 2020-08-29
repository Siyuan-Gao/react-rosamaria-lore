import React, { useState } from 'react';
// local
import MobileSearch from '../styled/MobileSearchBar';

export default function ShowSearch() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('## User searched for: ', searchTerm);
	};

	return (
		<MobileSearch>
			<form id="searchForm" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search and hit enter..."
					name="searchTerm"
					value={searchTerm}
					onChange={handleInput}
				/>
			</form>
		</MobileSearch>
	);
}
