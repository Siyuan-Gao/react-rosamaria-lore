import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
    margin-bottom: 0;
    border-bottom: none;
`;

const Logo = styled.div`
    text-align: center;
    padding: 70px 0 50px;
    max-width: 100%;
    height: auto;
`;

export default function SiteHeader() {
    return (
        <Header id="header">
            <div className="container">
                <Logo className="logo">
                    <h1>
                        <Link to="/">
                            {/* <a href="#"> */}
                            <img
                                src="https://solopine.com/rosemary/wp-content/themes/rosemary/img/logo.png"
                                alt="logo"
                            />
                            {/* </a> */}
                        </Link>
                    </h1>
                </Logo>
            </div>
        </Header>
    );
}
