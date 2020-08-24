import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
// local components
import TopNavBar from '../components/TopNavbar';
import SiteHeader from '../components/header';
import Footer from '../components/footer';

const LayoutBody = styled.div`
    background: #fff;
    font-family: 'Lato', sans-serif;
    color: #424242;
    font-size: 14px;
`;

const Layout = (props) => {
    const match = useRouteMatch('/');
    return (
        <LayoutBody className={match.path === '/' ? 'home blog' : 'page'}>
            <TopNavBar />
            <SiteHeader />
            {props.children}
            <Footer />
        </LayoutBody>
    );
};

export default Layout;
