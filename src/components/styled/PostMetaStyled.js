import styled from 'styled-components';

const PostMetaStyled = styled.div`
	margin-top: 35px;
	overflow: hidden;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 10px;
	font-style: italic;
	clear: both;

	.meta-share {
		float: right;
		color: #999;
		font-size: 13px;

		.share-text {
			margin-right: 2px;
		}
		a {
			margin-left: 9px;
			font-size: 16px;
		}
	}

	.meta-comments {
		float: left;

		a {
			color: #424242;
			font-size: 13px;
		}
	}
`;

export default PostMetaStyled;
