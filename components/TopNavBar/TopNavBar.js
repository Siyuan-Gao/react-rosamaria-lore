import React from "react";
import Link from "next/link";
import styled from "styled-components";
// HOOKS for active links
import ALink from "../../hooks/ActiveLink";
// imported styled comps
import { NavWrapper, MenuMenu, MenuItem } from "./NavMenuLinks";
import SearchBar from "./TopSearchBar";
import ShowSearch from "./ShowSearch";

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

function TopNavBar() {
    return (
        <TopNav id="top-nav-bar">
            <NavContainer className="container">
                <NavWrapper id="nav-wrapper">
                    <MenuMenu id="menu">
                        <MenuItem>
                            <ALink href="/" activeClassName="active">
                                <a>Home</a>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink href="/blog" activeClassName="active">
                                <a>Blog</a>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink href="/about-me" activeClassName="active">
                                <a>About</a>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink href="/contact" activeClassName="active">
                                <a>Contact</a>
                            </ALink>
                        </MenuItem>
                    </MenuMenu>
                </NavWrapper>
                <SearchBar />
                <ShowSearch />
            </NavContainer>
        </TopNav>
    );
}

export default TopNavBar;
