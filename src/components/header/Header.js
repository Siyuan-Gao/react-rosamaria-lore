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

    @media ${({ theme }) => theme.mediaQ.Lg} {
        .logo,
        img {
            max-width: 100%;
        }
    }

    @media ${({ theme }) => theme.mediaQ.Md} {
        .logo,
        img {
            max-width: 100%;
        }
    }

    @media ${({ theme }) => theme.mediaQ.Xs} {
        .logo,
        img {
            max-width: 100%;
        }
    }
    @media ${({ theme }) => theme.mediaQ.Sm} {
        .logo,
        img {
            max-width: 100%;
        }
    }
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
                                className="logo"
                                src="https://images.ctfassets.net/0dpthcqf2ojw/5bu2cMRooCz0MCcAUMs4a8/72ce863cf36fa1dbfb45bd13f163fd65/lore-logo.png?h=250"
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
