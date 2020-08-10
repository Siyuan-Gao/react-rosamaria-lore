import styled from "styled-components";
import Link from "next/link";

const ArticlePost = styled.article`
    margin-bottom: 50px;
`;

const PostHeader = styled.div`
    margin-bottom: 25px;
    text-align: center;

    .cat a {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 1px solid;
        border-color: #c69f73;
        padding-bottom: 2px;
        display: inline-block;
        margin: 0 4px 12px;
    }

    h2 {
        margin-bottom: 10px;

        a {
            color: #000;
            font-size: 26px;
            -o-transition: 0.2s;
            -ms-transition: 0.2s;
            -moz-transition: 0.2s;
            -webkit-transition: 0.2s;
        }

        a:hover {
            opacity: 0.6;
        }
    }

    .date,
    .updated,
    .published {
        font-size: 11px;
        font-style: italic;
        color: #888;
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
    margin-top: 35px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    font-style: italic;
    clear: both;

    .meta-comments {
        float: left;

        a {
            color: #424242;
            font-size: 13px;
        }
    }

    .meta-share {
        float: right;
        color: #999;
        font-size: 13px;

        .share-text {
            margin-right: 2px;
        }

        a {
            margin-left: 9px;
            font-size: 16px;
        }
    }
`;

export default function ArticleComponent({ articleImg }) {
    return (
        <ArticlePost>
            <PostHeader>
                <span className="cat">
                    <Link href="/">
                        <a>Cat</a>
                    </Link>
                </span>
                <h2>
                    <Link href="/">
                        <a>Title</a>
                    </Link>
                </h2>
                <span className="date published">Aug 10, 2020</span>
            </PostHeader>
            <PostImg>
                <Link href="/">
                    <a>
                        <img src={articleImg} />
                    </a>
                </Link>
            </PostImg>
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
                <Link href="/">
                    <a className="more-link">
                        <span className="more-button">Continue Reading</span>
                    </a>
                </Link>
            </PostEntry>
            <PostMeta>
                <div className="meta-comments">
                    <Link href="#">
                        <a>Comment</a>
                    </Link>
                </div>
                <div className="meta-share">
                    <span className="share-text">Share</span>
                    <a>
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a>
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
            </PostMeta>
        </ArticlePost>
    );
}
