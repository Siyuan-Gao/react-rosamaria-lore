import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    @media ${({ theme }) => theme.mediaQ.Sm} {
        display: block !important;
        color: #000;
        /* background: green; */
    }
    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: block !important;
        color: #000;
        /* background: blue; */
    }
`;

const NavB = styled.p`
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
    color: #000;
    font-size: 20px;

    .mt {
        display: block;
        line-height: 1.188em;
        float: left;
        color: #fff;
        font-weight: 700;
        text-shadow: 0 1px 3px #000;
    }
`;

function MobileMenuu() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div id='mobile-men'>
            <NavM>
                <NavB>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                    />
                </NavB>
                <ActualMenu showMenu={showMenu} />
            </NavM>
        </div>
    );
}

const ActualMenu = ({ showMenu }) => {
    return (
        <SlickUL style={showMenu ? { display: "block" } : { display: "none" }}>
            <li className='men-it'>
                <Link className='a2x' to='/'>
                    Home
                </Link>
            </li>
            <li className='men-it'>
                <Link className='a2x' to='/about-me'>
                    About
                </Link>
            </li>
            <li className='men-it'>
                <Link className='a2x' to='/posts'>
                    Posts
                </Link>
            </li>
            <li className='men-it'>
                <Link className='a2x' to='/projects'>
                    Projects
                </Link>
            </li>
            <li className='men-it'>
                <Link className='a2x' to='/contact'>
                    Contact
                </Link>
            </li>
        </SlickUL>
    );
};

const SlickUL = styled.ul`
    clear: both;
    color: #fff;
    margin: 0;
    padding: 0;
    background: #f6f6f6;
    z-index: 9999;
    list-style: none;
    overflow: hidden;
    li,
    .men-it {
        display: block;
        list-style: none;

        .a2x,
        a {
            padding: 5px 10px;
            margin: 2px 5px;
            text-decoration: none;
            color: #000;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
    }
`;

export default MobileMenuu;
