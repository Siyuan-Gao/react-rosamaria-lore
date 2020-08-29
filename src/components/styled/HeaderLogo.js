import styled from 'styled-components';

const Logo = styled.div`
	text-align: center;
	padding: 70px 0 50px;
	max-width: 100%;
	height: auto;

	@media ${({ theme }) => theme.mediaQ.Lg} {
		.logo,
		img {
			max-width: 100%;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Md} {
		.logo,
		img {
			max-width: 100%;
		}
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		.logo,
		img {
			max-width: 100%;
		}
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		.logo,
		img {
			max-width: 100%;
		}
	}
`;

export default Logo;
