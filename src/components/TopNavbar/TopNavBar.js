import React from "react";
import styled from "styled-components";

// HOOKS for active links
import ALink from "../../hooks/ActiveLink";

// imported styled comps
import { NavWrapper, MenuMenu, MenuItem } from "./NavMenuLinks";
import SearchBar from "./TopSearchBar";
import ShowSearch from "./ShowSearch";
import TopSocials from "./TopSocials";

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
                            <ALink to="/" activeClassName="active">
                                <p>Home</p>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink to="/about-me" activeClassName="active">
                                <p>About</p>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink to="/posts" activeClassName="active">
                                <p>Posts</p>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink to="/projects" activeClassName="active">
                                <p>Projects</p>
                            </ALink>
                        </MenuItem>
                        <MenuItem>
                            <ALink to="/contact" activeClassName="active">
                                <p>Contact</p>
                            </ALink>
                        </MenuItem>
                    </MenuMenu>
                </NavWrapper>
                <SearchBar />
                <ShowSearch />
                <TopSocials />
            </NavContainer>
        </TopNav>
    );
}

export default TopNavBar;
