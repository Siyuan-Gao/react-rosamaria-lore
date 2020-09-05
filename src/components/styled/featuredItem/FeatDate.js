import styled from 'styled-components';

const SpanDate = styled.span`
	display: block;
	margin-bottom: 28px;
	font-size: 11px;
	font-style: italic;
	color: ${(props) => props.theme.colors.date_color};
	@media ${({ theme }) => theme.mediaQ.Xs} {
		display: none;
		margin-bottom: 0;
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		display: block;
	}
`;

export default SpanDate;
