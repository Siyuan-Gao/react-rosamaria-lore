import React from "react";
import styled from "styled-components";
import * as Links from "../../utils/Constants";

export default function TopSocials() {
    return (
        <SocialsDiv>
            <a href={Links.LINKEDIN_LINK}>
                <i className="fa fa-linkedin" />
            </a>
            <a href={Links.TWITTER_LINK}>
                <i className="fa fa-twitter" />
            </a>
            {/* <a href="/#">
                <i className="fa fa-rss" />
            </a> */}
        </SocialsDiv>
    );
}

const SocialsDiv = styled.div`
    position: absolute;
    right: 185px;
    top: 0;

    a {
        color: #000;
        font-size: 13px;
        margin-left: 10px;
        line-height: 51px;
    }
    a:hover {
        color: #c69f73;
    }
    .nosearch {
        right: 0;
    }

    @media ${({ theme }) => theme.mediaQ.Xs} {
        right: 55px;
    }
`;
