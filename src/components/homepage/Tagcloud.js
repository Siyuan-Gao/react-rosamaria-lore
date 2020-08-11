import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Tagcloud({ children }) {
    return (
        <div className="widget">
            {children}
            <div className="tagcloud">
                {/*  */}
                <TagLink href="/">
                    <a href="#">Test 123</a>
                </TagLink>
                <TagLink href="/">
                    <a href="#">Test 45667</a>
                </TagLink>
                <TagLink href="/">
                    <a href="#">Test</a>
                </TagLink>
                <TagLink href="/">
                    <a href="#">Test 3333</a>
                </TagLink>
            </div>
        </div>
    );
}

const TagLink = styled.span`
    a {
        font-size: 9px !important;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: #f2f2f2;
        color: #777;
        padding: 6px 8px 7px;
        margin-right: 5px;
        margin-bottom: 8px;
        display: inline-block;
        -o-transition: 0.3s;
        -ms-transition: 0.3s;
        -moz-transition: 0.3s;
        -webkit-transition: 0.3s;
    }

    a:hover {
        opacity: 0.7;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Tagcloud;
