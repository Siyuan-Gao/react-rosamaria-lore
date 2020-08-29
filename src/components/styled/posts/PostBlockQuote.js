import styled from 'styled-components';

const PostBlockQuote = styled.blockquote`
	border-left: none;
	padding: 30px 60px;
	margin: 20px 0 0;

	p {
		font-family: 'Georgia';
		font-size: 20px;
		line-height: 30px;
		font-style: italic;
		color: #000;
		position: relative;
		z-index: 2 !important;
	}
	p:first-child:before {
		//prettier-ignore
		content: '\u201C';
		color: #ececec;
		font-size: 150px;
		font-weight: 700;
		position: absolute;
		top: 30px;
		left: -39px;
		text-shadow: none;
		z-index: -1;
	}
`;

export default PostBlockQuote;
