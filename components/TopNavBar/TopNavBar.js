import React from "react";
import styled from "styled-components";
import Link from "next/link";

const TopNav = styled.div`
    background: #fff;
    width: 100%;
    height: 51px;
    position: fixed;
    z-index: 9999;
    box-shadow: 0px 1px 5px rgba(190, 190, 190, 0.46);
    -webkit-box-shadow: 0px 1px 5px rgba(190, 190, 190, 0.46);
    -moz-box-shadow: 0px 1px 5px rgba(190, 190, 190, 0.46);
    -webkit-backface-visibility: hidden;
`;

const NavContainer = styled.div`
    position: relative;
`;

const NavWrapper = styled.div`
    float: left;
`;

const MenuMenu = styled.ul`
    list-style: none;
`;

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 28px;
    position: relative;

    a {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 51px;
        color: #000;
        display: block;
    }

    a:hover {
        color: #c69f73;
    }

    a.active {
        font-weight: 700;
    }
`;

function TopNavBar() {
    return (
        <TopNav id="top-nav-bar">
            <NavContainer className="container">
                <NavWrapper id="nav-wrapper">
                    <MenuMenu id="menu">
                        <MenuItem>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </MenuItem>
                        <MenuItem className>
                            <Link href="/">
                                <a>Blog</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/about-me">
                                <a>About</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </MenuItem>
                    </MenuMenu>
                </NavWrapper>
            </NavContainer>
        </TopNav>
    );
}

export default TopNavBar;
