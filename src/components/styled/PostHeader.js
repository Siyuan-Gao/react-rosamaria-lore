import styled from 'styled-components';

const PostHeader = styled.div`
	margin-bottom: 25px;
	text-align: center;

	h1 {
		color: ${(props) => props.theme.colors.black_color};
		font-size: 26px;
		margin-bottom: 10px;
		transition: 0.2s;
	}

	.cat p {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 2px;
		border-bottom: 1px solid;
		border-color: ${(props) => props.theme.colors.main_color};
		padding-bottom: 2px;
		display: inline-block;
		margin: 0 4px 12px;
	}

	.date,
	.updated,
	.published {
		font-size: 11px;
		font-style: italic;
		color: ${(props) => props.theme.colors.black_color};
	}

	&.fresh {
		.cat p {
			font-size: 10px;
			text-transform: uppercase;
			letter-spacing: 2px;
			border-bottom: 1px solid;
			border-color: ${(props) => props.theme.colors.main_color};
			padding-bottom: 2px;
			display: inline-block;
			margin: 0 4px 12px;
		}

		h2 {
			margin-bottom: 10px;

			p {
				color: ${(props) => props.theme.colors.black_color};
				font-size: 26px;
				transition: 0.2s;
				-ms-transition: 0.2s;
				-moz-transition: 0.2s;
				-webkit-transition: 0.2s;
			}

			p:hover {
				opacity: 0.6;
			}
		}
	}

	&.g {
		margin-bottom: 16px;
		text-align: center;

		.cat p {
			font-size: 10px;
			text-transform: uppercase;
			letter-spacing: 2px;
			border-bottom: 1px solid;
			border-color: ${(props) => props.theme.colors.main_color};
			padding-bottom: 2px;
			display: inline-block;
			margin: 0 4px 8px;
		}

		h2 {
			margin-bottom: 10px;

			p {
				color: ${(props) => props.theme.colors.black_color};
				font-size: 22px;
				font-weight: 400;
				transition: 0.2s;
			}

			p:hover {
				opacity: 0.6;
			}
		}

		@media ${({ theme }) => theme.mediaQ.Xs} {
			h2 {
				p {
					font-size: 18px;
				}
			}
		}
	}
`;

export default PostHeader;
