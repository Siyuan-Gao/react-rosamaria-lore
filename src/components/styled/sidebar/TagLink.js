import styled from 'styled-components';

const TagLink = styled.span`
	p {
		font-size: 9px !important;
		letter-spacing: 1px;
		text-transform: uppercase;
		background: #f2f2f2;
		color: #777;
		padding: 6px 8px 7px;
		margin-right: 5px;
		margin-bottom: 8px;
		display: inline-block;
		-o-transition: 0.3s;
		-ms-transition: 0.3s;
		-moz-transition: 0.3s;
		-webkit-transition: 0.3s;
	}

	p:hover {
		opacity: 0.7;
		text-decoration: none;
		cursor: pointer;
	}
`;

export default TagLink;
