import styled from 'styled-components';

const PostEntry = styled.div`
	p {
		margin-bottom: 20px;
	}
	&.about {
		p {
			margin-bottom: 26px;
		}

		img {
			border: 0;
			max-width: 100%;
			height: auto;
		}

		.alignright {
			float: right;
			margin: 5px 0 20px 20px;
		}
	}
	.more-link {
		text-align: center;
		display: block;

		.more-button {
			font-size: 10px;
			text-transform: uppercase;
			letter-spacing: 2px;
			color: ${(props) => props.theme.colors.black_color};
			background: ${(props) => props.theme.colors.white_color};
			font-weight: 700;
			display: inline-block;
			margin-top: 16px;
			padding: 9px 24px 10px;
			border: 1px solid;
			border-color: ${(props) => props.theme.colors.main_color};
			transition: 0.2s;
			-ms-transition: 0.2s;
			-moz-transition: 0.2s;
			-webkit-transition: 0.2s;
			line-height: 24px;
		}
		.more-button:hover {
			background: ${(props) => props.theme.colors.main_color};
			color: ${(props) => props.theme.colors.white_color};
			border: 1px solid;
			border-color: ${(props) => props.theme.colors.main_color};
		}
	}

	form {
		label {
			display: block;
			margin-bottom: 20px;
		}
		input {
			padding: 8px;
			border: 1px solid #ddd;
			margin-right: 10px;
			-webkit-border-radius: 5px;
			-moz-border-radius: 5px;
			border-radius: 5px;
			color: #777;
			font-size: 12px;
			margin-top: 6px;
			margin-bottom: 6px;
		}

		textarea {
			width: 95%;
			padding: 8px;
			border: 1px solid #ddd;
			margin-right: 10px;
			-webkit-border-radius: 5px;
			-moz-border-radius: 5px;
			border-radius: 5px;
			color: #777;
			font-size: 12px;
			margin-top: 6px;
			margin-bottom: 10px;
		}

		.submit {
			background: #eee;
			-webkit-border-radius: 20px;
			-moz-border-radius: 20px;
			border-radius: 20px;
			padding: 12px 24px;
			color: #666;
			letter-spacing: 3px;
			font-size: 11px;
			text-transform: uppercase;
			cursor: pointer;
			-o-transition: 0.3s;
			-ms-transition: 0.3s;
			-moz-transition: 0.3s;
			-webkit-transition: 0.3s;
			transition: 0.3s;
			display: block;
			border: none;
			width: auto;

			:hover {
				background: #333;
				color: #fff;
			}
		}
	}
`;

export default PostEntry;
