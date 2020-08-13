import React from "react";
import styled from "styled-components";

const navM = styled.div`
    display: none;
    font-size: 16px;
    background: #fff;
    padding: 6px;

    &:before {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }

    @media ${({ theme }) => theme.mediaQ.Md} {
        display: block !important;
    }
    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: block !important;
    }
`;

const navB = styled.a`
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

const navSpanIcons = styled.span`
    margin-top: 7px;
    margin: 0;
    float: left;
    /* prettier-ignore */
    span,
    .ibar {
            display: block;
            width: 1.125em;
            height: .125em;
            background-color: #000;
        }
`;

function MobileMenu() {
    return (
        <navM>
            <navB href="#">
                <span className="mt"></span>
                <navSpanIcons>
                    <span id="ibar"></span>
                    <span id="ibar"></span>
                    <span id="ibar"></span>
                </navSpanIcons>
            </navB>
        </navM>
    );
}

export default MobileMenu;
