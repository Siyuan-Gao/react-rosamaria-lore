import React, { useState } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
// LOCAL IMPORTs
import { DivMain } from "../../components/homepage/MainBar";
import {
    ArticlePost,
    PostHeader,
    PostImg,
    PostEntry,
    PostMeta,
} from "../../components/homepage/FreshArticle";
import Sidebar from "../../components/homepage/Sidebar";
import Layout from "../../layout";
// contentful stuff
import useContentful from "../../hooks/useContentful";
import {
    qeuryPostsToMatchSlugs,
    userCameFromOutside,
} from "../../utils/queries";

export default function Post(props) {
    const { params } = useRouteMatch("/posts/:slug");
    const { pathname, state } = useLocation();

    // ! 1. query for slugs
    let { data, errors } = useContentful(qeuryPostsToMatchSlugs);

    if (!data) {
        return <p>Loading...</p>;
    }
    if (errors) {
        return <p>{errors.map((error) => error.message).join(",")}</p>;
    }
    if (data) {
        const Post = userCameFromOutside(params.slug, data);
        return (
            <Layout>
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
                                        ).format("MMM Do, YYYY")}
                                    </span>
                                </PostHeader>
                                <PostImg>
                                    <Link to="/">
                                        <img
                                            src={data && Post.heroImage["url"]}
                                            alt={data && Post.title}
                                        />
                                    </Link>
                                </PostImg>
                                <PostEntry>
                                    <p>{data && Post.body}</p>
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
