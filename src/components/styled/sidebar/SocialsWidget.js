import styled from 'styled-components';

const SocialWidget = styled.div`
	text-align: center;

	a:first-child {
		margin-left: 0;
	}
	a:last-child {
		margin-right: 0;
	}
	a:hover > i {
		color: #c69f73;
	}

	a i {
		height: 16px;
		width: 20px;
		text-align: center;
		line-height: 20px;
		color: #161616;
		border-radius: 50%;
		margin: 0 8px;
		font-size: 16px;
	}
`;

export default SocialWidget;
