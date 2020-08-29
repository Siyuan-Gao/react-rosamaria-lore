import styled from 'styled-components';

const TopSearch = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	padding-left: 16px;
	border-left: 1px solid;
	border-color: #e8e8e8;
	z-index: 999;

	form {
		display: inline;
	}

	input {
		border: none;
		font-style: italic;
		width: 135px;
		background: 0 0;
		margin-right: 2px;
	}
	input:focus {
		outline: none;
	}

	i {
		font-size: 14px;
		line-height: 51px;
	}

	.fa-search:before {
		content: '\f002';
	}

	i.search-toggle {
		font-size: 14px;
		line-height: 51px;
		display: none;
		cursor: pointer;
	}

	@media ${({ theme }) => theme.mediaQ.Xs} {
		right: 10px;

		#desk-search {
			display: none;
		}

		i.search-desktop {
			display: none;
		}

		i.search-toggle {
			display: inline;
		}
	}
`;

export default TopSearch;
