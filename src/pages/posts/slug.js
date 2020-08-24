import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Helmet } from 'react-helmet';
// LOCAL IMPORTs
import { DivMain } from '../../components/homepage/MainBar';
import {
    ArticlePost,
    PostHeader,
    PostImg,
    PostEntry,
    PostMeta,
} from '../../components/homepage/FreshArticle';
import Sidebar from '../../components/homepage/Sidebar';
import Layout from '../../layout';
import PostBody from '../../components/posts/post-body';
// contentful stuff
import useContentful from '../../hooks/useContentful';
import {
    qeuryPostsToMatchSlugs,
    userCameFromOutside,
} from '../../utils/queries';

export default function Post(props) {
    const { params } = useRouteMatch('/posts/:slug');
    const { pathname } = useLocation();

    // ! 1. query for slugs
    let { data, errors } = useContentful(qeuryPostsToMatchSlugs);

    if (!data) {
        return <p>Loading...</p>;
    }
    if (errors) {
        return <p>{errors.map((error) => error.message).join(',')}</p>;
    }
    if (data) {
        const Post = userCameFromOutside(params.slug, data);
        // console.log(Post);
        return (
            <Layout>
                <Meta Post={Post} />
                <main className="container">
                    <div id="content">
                        <DivMain id="main">
                            <ArticlePost>
                                <PostHeader>
                                    <span className="cat">
                                        <Link to="/">
                                            <p>{data && Post.categories}</p>
                                        </Link>
                                    </span>
                                    <h2>
                                        <p>{data && Post.title}</p>
                                    </h2>
                                    <span className="date published">
                                        {moment(
                                            data && Post.publishDate
                                        ).format('MMM Do, YYYY')}
                                    </span>
                                </PostHeader>
                                <PostImg>
                                    <Link to="/">
                                        <img
                                            src={data && Post.heroImage['url']}
                                            alt={data && Post.title}
                                        />
                                    </Link>
                                </PostImg>
                                <PostEntry>
                                    {/* <p>{data && Post.body}</p> */}
                                    <PostBody content={Post.body.json} />
                                </PostEntry>
                                <PostMeta>
                                    <div className="meta-share">
                                        <span className="share-text">
                                            Share
                                        </span>
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?&mini=true&url=https://lorainambrocio.com${pathname}&title=${Post.title}`}
                                        >
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${Post.title}&url=https://lorainambrocio.com${pathname}`}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </PostMeta>
                            </ArticlePost>
                        </DivMain>
                        <Sidebar />
                    </div>
                </main>
            </Layout>
        );
    }
}

const Meta = ({ Post }) => {
    return (
        <Helmet>
            {/* Test */}
            <title>{Post.title} – Lorain Ambrocio</title>
            <meta name="description" content={Post.postDescription} />
            <meta name="keywords" content={Post.tags} />
            <meta property="og:site_name" content="Lorain Ambrocio" />
            <meta
                property="og:title"
                content={`${Post.title} – Lorain Ambrocio`}
            />
            <meta property="og:description" content={Post.postDescription} />
            <meta property="og:image" content={Post.heroImage.url} />
            <meta
                property="og:url"
                content={`https://lorainambrocio.com/posts/${Post.slug}`}
            />
        </Helmet>
    );
};
