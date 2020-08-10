import styled from "styled-components";
// local components
import TopNavBar from "../components/TopNavBar";
import SiteHeader from "../components/Header";

const LayoutBody = styled.div`
    background: #fff;
    font-family: "Lato", sans-serif;
    color: #424242;
    font-size: 14px;
`;

const Layout = (props) => (
    <LayoutBody>
        <TopNavBar />
        <SiteHeader />
        {props.children}
    </LayoutBody>
);

export default Layout;
