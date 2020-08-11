import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function GridArticle({ articleImg }) {
    return (
        <ArticlePost className="grid-item">
            <PostImg>
                <Link to="/">
                    <a href="#">
                        <img src={articleImg} />
                    </a>
                </Link>
            </PostImg>
            <PostHeader>
                <span className="cat">
                    <Link to="/">
                        <a href="#">Cat</a>
                    </Link>
                </span>
                <h2>
                    <Link to="/">
                        <a href="#">Title</a>
                    </Link>
                </h2>
            </PostHeader>

            <PostEntry>
                <p>
                    Meh synth Schlitz, tempor duis single-origin coffee ea next
                    level ethnic fingerstache fanny pack nostrud. Photo booth
                    anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia
                    esse nihil, flexitarian Truffaut synth art party deep v
                    chillwave. Seitan High Life reprehenderit consectetur
                    cupidatat kogi. Et leggings kale chips proident chillwave
                    deep origin coffee ea.
                </p>
            </PostEntry>
            <PostMeta>
                <span className="date">Aug 10, 2020</span>
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

    .cat a {
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

        a {
            color: #000;
            font-size: 22px;
            font-weight: 400;
            -o-transition: 0.2s;
            -ms-transition: 0.2s;
            -moz-transition: 0.2s;
            -webkit-transition: 0.2s;
        }

        a:hover {
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
