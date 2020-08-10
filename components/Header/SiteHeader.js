import React from "react";
import styled from "styled-components";
import Link from "next/link";

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
                        <Link href="/">
                            <a>
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>
                    </h1>
                </Logo>
            </div>
        </Header>
    );
}
