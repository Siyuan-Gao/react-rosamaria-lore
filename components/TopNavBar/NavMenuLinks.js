import styled from "styled-components";

export const NavWrapper = styled.div`
    float: left;
`;

export const MenuMenu = styled.ul`
    list-style: none;
`;

export const MenuItem = styled.li`
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

    .active {
        color: #c69f73 !important;
        font-weight: 700 !important;
    }
`;
