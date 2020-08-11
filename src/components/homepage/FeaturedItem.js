import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FeaturedItem(props) {
    const {
        imageURL,
        post_cat,
        post_cat_url,
        post_title,
        post_date,
        post_url,
    } = props;

    return (
        <FeatItem image={imageURL}>
            <FeatOverlay>
                <FeatOverlayInner>
                    <PostHeader id="post-header">
                        <span className="cat">
                            <Link to={post_cat_url}>
                                <CatA>
                                    {/* CATERGORY */}
                                    {post_cat}
                                </CatA>
                            </Link>
                        </span>
                        <CatH2>
                            <Link to={post_url}>
                                <a href="#">
                                    {/* BLOG TITLE */}
                                    {post_title}
                                </a>
                            </Link>
                        </CatH2>
                        <SpanDate>
                            {/* BLOG POSTED DATE */}
                            {post_date}
                        </SpanDate>
                        <Button_ReadMore>
                            <Link to="/">
                                <a href="#">Read More</a>
                            </Link>
                        </Button_ReadMore>
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

const CatA = styled.a`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid;
    border-color: #c69f73;
    padding-bottom: 2px;
    display: inline-block;
    margin: 0 4px 12px;
`;

const CatH2 = styled.h2`
    margin-bottom: 14px;

    a {
        color: #000;
        font-size: 24px;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
    }
    a:hover {
        opacity: 0.6;
    }
`;

const SpanDate = styled.span`
    display: block;
    margin-bottom: 28px;
    font-size: 11px;
    font-style: italic;
    color: #888;
`;

const Button_ReadMore = styled.span`
    a {
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
    a:hover {
        background: #c69f73;
        color: #fff;
    }
`;

export default FeaturedItem;
