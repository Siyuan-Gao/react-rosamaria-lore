import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
// local
import FreshBody from '../posts/fresh-body';

function ArticleComponent({ article }) {
    return (
        <ArticlePost>
            <PostHeader>
                <span className="cat">
                    <Link
                        to={{
                            pathname: `/category/${article.categories[0].toLowerCase()}`,
                            state: { category: article.categories[0] },
                        }}
                    >
                        <p>{article && article.categories[0]}</p>
                    </Link>
                </span>
                <h2>
                    <Link
                        to={{
                            pathname: `/posts/${article.slug.toLowerCase()}`,
                            state: { postID: article.sys.id },
                        }}
                    >
                        <p>{article && article.title}</p>
                    </Link>
                </h2>
                {/* {console.log(article.publishDate)} */}
                <span className="date published">
                    {moment(article.publishDate).format('MMM Do, YYYY')}
                </span>
            </PostHeader>
            <PostImg>
                <Link
                    to={{
                        pathname: `/posts/${article.slug.toLowerCase()}`,
                        state: { postID: article.sys.id },
                    }}
                >
                    <img
                        src={article && article.heroImage.url}
                        alt={article && article.title}
                    />
                </Link>
            </PostImg>
            <PostEntry>
                <p>
                    <FreshBody content={article.body.json.content[0]} />
                </p>
                <Link
                    // to={`/posts/${article.slug.toLowerCase()}`}
                    to={{
                        pathname: `/posts/${article.slug.toLowerCase()}`,
                        state: { postID: article.sys.id },
                    }}
                >
                    <p className="more-link">
                        <span className="more-button">Continue Reading</span>
                    </p>
                </Link>
            </PostEntry>
            <PostMeta>
                {/* <div className="meta-comments">
                    <Link to="#">
                        <a href="#">Comment</a>
                    </Link>
                </div> */}
                <SocialShareUniversal
                    title={article.title}
                    pathname={article.slug}
                />
            </PostMeta>
        </ArticlePost>
    );
}

// func components
const SocialShareUniversal = ({ title, pathname }) => (
    <div className="meta-share">
        <span className="share-text">Share</span>
        <a
            href={`https://www.linkedin.com/shareArticle?&mini=true&url=https://lorainambrocio.com/posts/${pathname}&title=${title}`}
        >
            <i className="fa fa-linkedin"></i>
        </a>
        <a
            href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${title}&url=https://lorainambrocio.com/posts/${pathname}`}
            rel="noopener noreferrer"
            target="_blank"
        >
            <i className="fa fa-twitter"></i>
        </a>
    </div>
);

ArticleComponent.propTypes = {
    blogPost: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        publishDate: PropTypes.instanceOf(Date).isRequired,
        heroImage: PropTypes.object.isRequired,
        body: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        tags: PropTypes.array.isRequired,
        author: PropTypes.object.isRequired,
    }),
};

const ArticlePost = styled.article`
    margin-bottom: 50px;
`;

const PostHeader = styled.div`
    margin-bottom: 25px;
    text-align: center;

    .cat p {
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

        p {
            color: #000;
            font-size: 26px;
            -o-transition: 0.2s;
            -ms-transition: 0.2s;
            -moz-transition: 0.2s;
            -webkit-transition: 0.2s;
        }

        p:hover {
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

export default ArticleComponent;
export {
    ArticlePost,
    PostHeader,
    PostImg,
    PostEntry,
    PostMeta,
    SocialShareUniversal,
};
