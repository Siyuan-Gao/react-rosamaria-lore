import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";

export default function GridArticle({ postInfo }) {
    // console.log(postInfo);
    return (
        <ArticlePost className="grid-item">
            <PostImg>
                <Link
                    to={{
                        pathname: `/posts/${postInfo.slug.toLowerCase()}`,
                        state: { postID: postInfo.sys.id },
                    }}
                >
                    <img src={postInfo.heroImage.url} />
                </Link>
            </PostImg>
            <PostHeader>
                <span className="cat">
                    <Link to="/">
                        <p>{postInfo.categories[0]}</p>
                    </Link>
                </span>
                <h2>
                    <Link
                        to={{
                            pathname: `/posts/${postInfo.slug.toLowerCase()}`,
                            state: { postID: postInfo.sys.id },
                        }}
                    >
                        <p href="#">{postInfo.title}</p>
                    </Link>
                </h2>
            </PostHeader>

            <PostEntry>
                <p>
                    {postInfo.body.length > 200
                        ? `${postInfo.body.substring(0, 200)}...`
                        : postInfo.body}
                </p>
            </PostEntry>
            <PostMeta>
                <span className="date">
                    {moment(postInfo.publishDate).format("MMM Do, YYYY")}
                </span>
            </PostMeta>
        </ArticlePost>
    );
}

const ArticlePost = styled.article`
    margin-bottom: 50px;

    .grid-item {
        margin-bottom: 40px;
    }
`;

const PostHeader = styled.div`
    margin-bottom: 16px;
    text-align: center;

    .cat p {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 1px solid;
        border-color: #c69f73;
        padding-bottom: 2px;
        display: inline-block;
        margin: 0 4px 8px;
    }

    h2 {
        margin-bottom: 10px;

        p {
            color: #000;
            font-size: 22px;
            font-weight: 400;
            -o-transition: 0.2s;
            -ms-transition: 0.2s;
            -moz-transition: 0.2s;
            -webkit-transition: 0.2s;
        }

        p:hover {
            opacity: 0.6;
        }
    }
`;

const PostImg = styled.div`
    margin-bottom: 20px;
    text-align: center;

    a img {
        border: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;

const PostEntry = styled.div`
    p {
        margin-bottom: 20px;
    }

    .more-link {
        text-align: center;
        display: block;

        .more-button {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #000;
            background: #fff;
            font-weight: 700;
            display: inline-block;
            margin-top: 16px;
            padding: 9px 24px 10px;
            border: 1px solid;
            border-color: #c69f73;
            -o-transition: 0.2s;
            -ms-transition: 0.2s;
            -moz-transition: 0.2s;
            -webkit-transition: 0.2s;
            line-height: 24px;
        }
        .more-button:hover {
            background: #c69f73;
            color: #fff;
            border: 1px solid;
            border-color: #c69f73;
        }
    }
`;

const PostMeta = styled.div`
    .date {
        font-size: 11px;
        font-style: italic;
        color: #999;
    }
`;
