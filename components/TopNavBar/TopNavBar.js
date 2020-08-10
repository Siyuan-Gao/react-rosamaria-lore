import React from "react";
import styled from "styled-components";

const topNav = styled.div`
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

function TopNavBar() {
    return <topNav>Nav!</topNav>;
}

export default TopNavBar;
