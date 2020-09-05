import styled from 'styled-components';

const Footy = styled.div`
	clear: both;
	padding: 16px 0 28px;
	overflow: hidden;
	p {
		font-style: italic;
		font-size: 12px;
		color: ${(props) => props.theme.colors.date_color};
	}

	.left {
		float: left;
	}
	.right {
		float: right;
	}
`;
export default Footy;
