import React from "react";
import styled from "styled-components";

const Header = styled.header`
    padding-top: 51px;
    margin-bottom: 60px;
    border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
    text-align: center;
    padding: 68px 0 41px;
    max-width: 100%;
    height: auto;
`;

export default function SiteHeader() {
    return (
        <Header>
            <div className="container">
                <div className="logo">
                    <h1>
                        <a>
                            <img src="/images/logo.png" alt="logo" />
                        </a>
                    </h1>
                </div>
            </div>
        </Header>
    );
}
