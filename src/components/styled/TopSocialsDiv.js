import styled from 'styled-components';

const SocialsDiv = styled.div`
	position: absolute;
	right: 185px;
	top: 0;

	a {
		color: ${(props) => props.theme.colors.black_color};
		font-size: 13px;
		margin-left: 10px;
		line-height: 51px;
	}
	a:hover {
		color: ${(props) => props.theme.colors.link_hover_color};
	}
	.nosearch {
		right: 0;
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		right: 55px;
	}
`;

export default SocialsDiv;
