import React from "react";
import styled from "styled-components";

import { slide as Menu } from "react-burger-menu";

const NavM = styled.div`
    display: none;
    font-size: 16px;
    background: #fff;
    padding: 6px;

    :before {
        content: " ";
        display: table;
    }

    :after {
        clear: both;
        content: " ";
        display: table;
    }

    @media ${({ theme }) => theme.mediaQ.Md} {
        display: block !important;
        color: #000;
        /* background: red; */
    }
    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: block !important;
        color: #000;
        background: blue;
    }
`;

const NavB = styled.a`
    position: relative;
    display: block;
    vertical-align: middle;
    float: left;
    line-height: 27px;
    cursor: pointer;
    height: 27px;
    /*  */
    margin: 5px 5px 6px;
    text-decoration: none;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;

    .mt {
        display: block;
        line-height: 1.188em;
        float: left;
        color: #fff;
        font-weight: 700;
        text-shadow: 0 1px 3px #000;
    }
`;

const NavSpanIcons = styled.span`
    margin-top: 7px;
    float: left;

    #n-t {
        margin: 0;
    }
    .icon-bar {
        display: block;
        width: 1.125em;
        height: 0.125em;
    }
`;

const MobileMenu = styled.div``;

function MobileMenuu() {
    return (
        <MobileMenu id="mobile-men">
            {/* <NavM>
            <NavB href="#">
                <span className="mt"></span>
                <NavSpanIcons id="n-t">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </NavSpanIcons>
            </NavB>
        </NavM> */}
            <NavM>
                <Menu>
                    <a id="home" className="menu-item" href="/t1">
                        Home
                    </a>
                    <a id="home" className="menu-item" href="/t1">
                        Home
                    </a>
                    <a id="home" className="menu-item" href="/t1">
                        Home
                    </a>
                    <a id="home" className="menu-item" href="/t1">
                        Home
                    </a>
                </Menu>
            </NavM>
        </MobileMenu>
    );
}

export default MobileMenuu;
