import styled from 'styled-components';

const SpGrid = styled.ul`
	li {
		width: 365px;
		display: inline-block;
		vertical-align: top;
		margin-right: 26px;

		.grid-item {
			margin-bottom: 40px;
		}
	}

	li:nth-of-type(2n + 2) {
		margin-right: 0;
	}

	@media ${({ theme }) => theme.mediaQ.Lg} {
		li {
			width: 310px;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		li {
			width: 348px;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		li {
			width: 300px;
			margin-right: 0;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Sm} {
		li {
			width: 225px;
			margin-right: 26px;
		}
	}
`;

export default SpGrid;
