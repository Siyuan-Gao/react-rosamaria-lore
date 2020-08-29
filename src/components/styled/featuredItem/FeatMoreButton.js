import styled from 'styled-components';

const ButtonReadMore = styled.span`
	p {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #000;
		background: #fff;
		font-weight: 700;
		display: inline-block;
		padding: 12px 26px 13px;
		border: 1px solid;
		border-color: #c69f73;
		-o-transition: 0.2s;
		-ms-transition: 0.2s;
		-moz-transition: 0.2s;
		-webkit-transition: 0.2s;
	}
	p:hover {
		background: #c69f73;
		color: #fff;
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		display: none;
	}
`;

export default ButtonReadMore;
