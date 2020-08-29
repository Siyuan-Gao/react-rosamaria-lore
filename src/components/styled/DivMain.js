import styled from 'styled-components';

const DivMain = styled.div`
	width: 760px;
	float: left;

	@media ${({ theme }) => theme.mediaQ.Lg} {
		width: 650px;
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		width: 100%;
	}
	@media ${({ theme }) => theme.mediaQ.Xs} {
		width: 100%;
	}
`;

export default DivMain;
