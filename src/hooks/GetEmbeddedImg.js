import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

function GetEmbeddedImg({ assetID, width }) {
	const [data, setData] = useState(null);
	const [errors, setErrors] = useState(null);

	const {
		REACT_APP_CONTENTFUL_SPACE,
		REACT_APP_CONTENTFUL_TOKEN,
	} = process.env;

	const query = `query{
        asset(id: "${assetID}"){
            url
            title
        }
    }`;

	useEffect(() => {
		window
			.fetch(
				`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${REACT_APP_CONTENTFUL_TOKEN}`,
					},
					body: JSON.stringify({ query }),
				}
			)
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) setErrors(errors);
				if (data) setData(data.asset);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//
	if (errors)
		return (
			<span style={{ color: 'red' }}>
				{errors.map((error) => error.message).join(',')}
			</span>
		);
	if (!data) return <p>Loading...</p>;
	// console.log(data);
	return (
		<>
			<LazyLoad>
				<img
					// ?w=${width}
					src={`${data.url}`}
					alt={data.title}
					title={data.title}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</LazyLoad>
		</>
	);
}
export default GetEmbeddedImg;
