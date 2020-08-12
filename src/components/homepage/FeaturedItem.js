import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";

function FeaturedItem({ featInfo }) {
    const { heroImage, categories, slug, sys, title, publishDate } = featInfo;

    return (
        <FeatItem image={heroImage.url}>
            <FeatOverlay>
                <FeatOverlayInner>
                    <PostHeader id="post-header">
                        <span className="cat">
                            <Link
                                to={{
                                    pathname: `/category/${categories[0].toLowerCase()}`,
                                    state: { category: categories[0] },
                                }}
                            >
                                <CatA>
                                    {/* CATERGORY */}
                                    {featInfo && categories[0]}
                                </CatA>
                            </Link>
                        </span>
                        <CatH2>
                            <Link
                                to={{
                                    pathname: `/posts/${slug.toLowerCase()}`,
                                    state: { postID: sys.id },
                                }}
                            >
                                <p>
                                    {/* BLOG TITLE */}
                                    {featInfo && title}
                                </p>
                            </Link>
                        </CatH2>
                        <SpanDate>
                            {/* BLOG POSTED DATE */}
                            {moment(publishDate).format("MMM Do, YYYY")}
                        </SpanDate>
                        <ButtonReadMore>
                            <Link
                                to={{
                                    pathname: `/posts/${slug.toLowerCase()}`,
                                    state: { postID: sys.id },
                                }}
                            >
                                <p>Read More</p>
                            </Link>
                        </ButtonReadMore>
                    </PostHeader>
                </FeatOverlayInner>
            </FeatOverlay>
        </FeatItem>
    );
}
const FeatItem = styled.div`
    background-image: url(${(props) => props.image || ""});
    position: relative;
    height: 660px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 17.2% 32.5%;

    @media ${({ theme }) => theme.mediaQ.Lg} {
        height: 574px;
        padding: 15.2% 28.5%;
    }

    @media ${({ theme }) => theme.mediaQ.Md} {
        height: 444px;
        padding: 12.2% 25.5%;
    }
    @media ${({ theme }) => theme.mediaQ.Xs} {
        height: 220px;
        padding: 16.2% 16.5%;
    }
    @media ${({ theme }) => theme.mediaQ.Sm} {
        height: 310px;
        padding: 14.2% 20.5%;
    }
`;

const FeatOverlay = styled.div`
    background: rgba(255, 255, 255, 1);
    position: relative;
    height: 100%;
    width: 100%;
    display: table;
    vertical-align: middle;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
`;

const FeatOverlayInner = styled.div`
    vertical-align: middle;
    display: table-cell;
`;

const PostHeader = styled.div`
    margin-bottom: 0;
    padding: 0 20px;
    text-align: center;
`;

const CatH2 = styled.h2`
    margin-bottom: 14px;

    p {
        color: #000;
        font-size: 24px;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
    }
    p:hover {
        opacity: 0.6;
    }

    @media ${({ theme }) => theme.mediaQ.Md} {
        p {
            font-size: 22px;
        }
    }

    @media ${({ theme }) => theme.mediaQ.Xs} {
        margin-bottom: 0;

        p {
            font-size: 15px;
        }
    }

    @media ${({ theme }) => theme.mediaQ.Sm} {
        margin-bottom: 14px;

        p {
            font-size: 16px;
        }
    }
`;

const CatA = styled.p`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid;
    border-color: #c69f73;
    padding-bottom: 2px;
    display: inline-block;
    margin: 0 4px 12px;

    @media ${({ theme }) => theme.mediaQ.Sm} {
        font-size: 10px;
        margin-bottom: 12px;
    }

    @media ${({ theme }) => theme.mediaQ.Xs} {
        font-size: 8px;
        margin-bottom: 7px;
    }
`;

const SpanDate = styled.span`
    display: block;
    margin-bottom: 28px;
    font-size: 11px;
    font-style: italic;
    color: #888;
    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: none;
        margin-bottom: 0;
    }
    @media ${({ theme }) => theme.mediaQ.Sm} {
        display: block;
    }
`;

const ButtonReadMore = styled.span`
    p {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #000;
        background: #fff;
        font-weight: 700;
        display: inline-block;
        padding: 12px 26px 13px;
        border: 1px solid;
        border-color: #c69f73;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
    }
    p:hover {
        background: #c69f73;
        color: #fff;
    }

    @media ${({ theme }) => theme.mediaQ.Xs} {
        display: none;
    }
`;

export default FeaturedItem;
