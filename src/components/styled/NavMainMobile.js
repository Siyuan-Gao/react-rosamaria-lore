import styled from 'styled-components';

const NavM = styled.div`
	display: none;
	font-size: 16px;
	background: #fff;
	padding: 6px;

	:before {
		content: ' ';
		display: table;
	}

	:after {
		clear: both;
		content: ' ';
		display: table;
	}

	p {
		position: relative;
		display: block;
		vertical-align: middle;
		float: left;
		line-height: 27px;
		cursor: pointer;
		height: 27px;
		/*  */
		margin: 5px 5px 6px;
		text-decoration: none;
		text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		color: #000;
		font-size: 20px;

		.mt {
			display: block;
			line-height: 1.188em;
			float: left;
			color: #fff;
			font-weight: 700;
			text-shadow: 0 1px 3px #000;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		display: block !important;
		color: #000;
		/* background: red; */
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		display: block !important;
		color: #000;
		/* background: green; */
	}
	@media ${({ theme }) => theme.mediaQ.Xs} {
		display: block !important;
		color: #000;
		/* background: blue; */
	}
`;

export default NavM;
