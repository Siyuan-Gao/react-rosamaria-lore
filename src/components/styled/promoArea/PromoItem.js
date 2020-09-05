import styled from 'styled-components';

const DivPromoItem = styled.div`
	background-image: url(${(props) => props.image || ''});
	display: table;
	width: 340px;
	float: left;
	margin-right: 30px;
	height: 190px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 16px;
	position: relative;

	.promo-overlay {
		height: 100%;
		display: table-cell;
		vertical-align: middle;
		text-align: center;

		h4 {
			color: #000;
			line-height: 1.5em;
			padding: 12px 16px 12px 17px;
			font-size: 11px;
			text-transform: uppercase;
			letter-spacing: 2px;
			background: ${(props) => props.theme.colors.white_color};
			display: inline-block;
			max-width: 65%;
			font-family: 'Lato', sans-serif;
			-webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
			-moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
			box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
		}
	}

	@media ${({ theme }) => theme.mediaQ.Lg} {
		width: 293px;
		height: 172px;
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		width: 230px;
		height: 135px;
		margin-right: 18px;
	}
	@media ${({ theme }) => theme.mediaQ.Xs} {
		width: 100%;
		height: 176px;
		margin-bottom: 30px;
	}
`;

export default DivPromoItem;
