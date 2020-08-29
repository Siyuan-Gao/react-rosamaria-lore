import styled from 'styled-components';

const CatH2 = styled.h2`
	margin-bottom: 14px;

	p {
		color: #000;
		font-size: 24px;
		-o-transition: 0.2s;
		-ms-transition: 0.2s;
		-moz-transition: 0.2s;
		-webkit-transition: 0.2s;
	}
	p:hover {
		opacity: 0.6;
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		p {
			font-size: 22px;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		margin-bottom: 0;

		p {
			font-size: 15px;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Sm} {
		margin-bottom: 14px;

		p {
			font-size: 16px;
		}
	}
`;

export default CatH2;
