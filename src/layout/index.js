import React from 'react';

import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lorain Ambrocio - Home</title>
                <meta
                    name="description"
                    content="Lorain Ambrocios thoughts and past works!"
                />
                <meta
                    name="keywords"
                    content="academic advising, higher education, blog,"
                />
                <meta
                    property="og:site_name"
                    content="Lorain Ambrocio\'s site"
                />
                <meta property="og:title" content="Lorain Ambrocio - Home" />
                <meta
                    property="og:description"
                    content="Thoughts and previous works in the higher education field."
                />
                <meta
                    property="og:image"
                    content="https://images.ctfassets.net/0dpthcqf2ojw/5bu2cMRooCz0MCcAUMs4a8/72ce863cf36fa1dbfb45bd13f163fd65/lore-logo.png?h=250"
                />
                <meta property="og:url" content="https://lorainambrocio.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:image:alt"
                    content="logo for lorainambrocio.com"
                />
            </Helmet>
            <LayoutBody className={match.path === '/' ? 'home blog' : 'page'}>
                <TopNavBar />
                <SiteHeader />
                {props.children}
                <Footer />
            </LayoutBody>
        </>
    );
};

export default Layout;
