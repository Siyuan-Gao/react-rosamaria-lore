import styled from 'styled-components';

const FeatItem = styled.div`
	background-image: url(${(props) => props.image || ''});
	position: relative;
	height: 660px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding: 17.2% 32.5%;

	@media ${({ theme }) => theme.mediaQ.Lg} {
		height: 574px;
		padding: 15.2% 28.5%;
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		height: 444px;
		padding: 12.2% 25.5%;
	}
	@media ${({ theme }) => theme.mediaQ.Xs} {
		height: 220px;
		padding: 16.2% 16.5%;
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		height: 310px;
		padding: 14.2% 20.5%;
	}
`;

export default FeatItem;
