import styled from "styled-components";

export const NavWrapper = styled.div`
    float: left;

    @media ${({ theme }) => theme.mediaQ.Md} {
        display: none;
    }
    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: none;
    }
    @media ${({ theme }) => theme.mediaQ.Sm} {
        display: none;
    }
`;

export const MenuMenu = styled.ul`
    list-style: none;
`;

export const MenuItem = styled.li`
    display: inline-block;
    margin-right: 28px;
    position: relative;

    p {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 51px;
        color: #000;
        display: block;

        .active {
            color: #c69f73 !important;
            font-weight: 700 !important;
        }
    }

    p:hover {
        color: #c69f73;
    }
`;
