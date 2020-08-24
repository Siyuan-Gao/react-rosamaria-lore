import React from 'react';
import Layout from '../layout';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// Social Feeds
import * as links from '../utils/Constants';
// contentful
import { queryAboutPage } from '../utils/queries';
import useContentful from '../hooks/useContentful';

function AboutMe() {
    let { data, errors } = useContentful(queryAboutPage);

    if (errors)
        return (
            <span style={{ color: 'red' }}>
                {errors.map((error) => error.message).join(',')}
            </span>
        );
    if (!data) return <p>Loading...</p>;
    const { json } = data.about.body;
    return (
        <Layout>
            <div className="container">
                <div id="content">
                    <main className="">
                        <article>
                            <PostHeader>
                                <h1>About Me:</h1>
                            </PostHeader>
                            <PostEntry>
                                {/* <PostBody content={json} /> */}
                                {documentToReactComponents(json)}
                            </PostEntry>
                            <PostMeta />
                            <PostComments />
                        </article>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

const PostMeta = () => (
    <PostMetaStyled className="post-meta">
        <div className="meta-share">
            <span className="share-text">
                Share
                <a href={links.LINKEDIN_LINK}>
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href={links.TWITTER_LINK}>
                    <i className="fa fa-twitter"></i>
                </a>
            </span>
        </div>
    </PostMetaStyled>
);

const PostHeader = styled.div`
    margin-bottom: 25px;
    text-align: center;

    h1 {
        color: #000;
        font-size: 26px;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
    }
`;

const PostEntry = styled.div`
    p {
        margin-bottom: 26px;
    }

    img {
        border: 0;
        max-width: 100%;
        height: auto;
    }

    .alignright {
        float: right;
        margin: 5px 0 20px 20px;
    }
`;

// const BlockedQuote = styled.blockquote`
//     border-left: 3px solid;
//     padding: 30px 60px;
//     margin: 20px 0 0;

//     p {
//         font-family: 'Georgia';
//         font-style: italic;
//         font-size: 20px;
//         line-height: 30px;
//         color: #000;
//         position: relative;
//     }

//     cite {
//         margin-top: -10px;
//         color: #999;
//         display: block;
//         font-style: normal;
//         font-weight: 400;

//         :before {
//             content: '-';
//             margin-right: 4px;
//         }
//     }
// `;

const PostMetaStyled = styled.div`
    margin-top: 35px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    font-style: italic;
    clear: both;

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

const PostComments = styled.div`
    margin-bottom: 60px;
    margin-top: 60px;
`;

export default AboutMe;
export { PostMeta, PostComments };
