import styled from 'styled-components';

const SlickUL = styled.ul`
	clear: both;
	color: #fff;
	margin: 0;
	padding: 0;
	background: #f6f6f6;
	z-index: 9999;
	list-style: none;
	overflow: hidden;
	li,
	.men-it {
		display: block;
		list-style: none;

		.a2x,
		a {
			padding: 5px 10px;
			margin: 2px 5px;
			text-decoration: none;
			color: #000;
			font-size: 12px;
			font-weight: 400;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
	}
`;

export default SlickUL;
