import styled from 'styled-components';

const CatA = styled.p`
	font-size: 10px;
	text-transform: uppercase;
	letter-spacing: 2px;
	border-bottom: 1px solid;
	border-color: ${(props) => props.theme.colors.main_color};
	padding-bottom: 2px;
	display: inline-block;
	margin: 0 4px 12px;

	@media ${({ theme }) => theme.mediaQ.Sm} {
		font-size: 10px;
		margin-bottom: 12px;
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		font-size: 8px;
		margin-bottom: 7px;
	}
`;
export default CatA;
