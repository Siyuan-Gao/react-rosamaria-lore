import styled from 'styled-components';

const ButtonReadMore = styled.span`
	p {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: ${(props) => props.theme.colors.black_color};
		background: ${(props) => props.theme.colors.white_color};
		font-weight: 700;
		display: inline-block;
		padding: 12px 26px 13px;
		border: 1px solid;
		border-color: ${(props) => props.theme.colors.main_color};
		transition: 0.2s;
		-ms-transition: 0.2s;
		-moz-transition: 0.2s;
		-webkit-transition: 0.2s;
	}
	p:hover {
		background: ${(props) => props.theme.colors.main_color};
		color: ${(props) => props.theme.colors.white_color};
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		display: none;
	}
`;

export default ButtonReadMore;
