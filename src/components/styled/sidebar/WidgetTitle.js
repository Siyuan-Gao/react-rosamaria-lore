import styled from 'styled-components';

const WidgetTitle = styled.h4`
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.main_color};
	font-size: 10px;
	color: ${(props) => props.theme.colors.black_color};
	text-transform: uppercase;
	letter-spacing: 2px;
	font-family: 'Lato';
	font-weight: 700;
	text-align: center;
	margin-bottom: 25px;
	padding: 16px 0;
`;

export default WidgetTitle;
