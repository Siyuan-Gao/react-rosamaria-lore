import React from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
// LOCAL IMPORTs
import { DivMain } from "../components/homepage/MainBar";
import {
    ArticlePost,
    PostHeader,
    PostImg,
    PostEntry,
    PostMeta,
} from "../components/homepage/FreshArticle";
import Sidebar from "../components/homepage/Sidebar";
import Layout from "../layout";
// contentful stuff
import useContentful from "../hooks/useContentful";
import { querySpecificPost } from "../utils/queries";

export default function Post(props) {
    const { isExact } = useRouteMatch("/posts/:slug");
    const { state } = useLocation();

    let { data, errors } = useContentful(querySpecificPost(state.postID));

    if (!data) {
        return <p>Loading...</p>;
    }
    if (errors) {
        return <p>ERROR!</p>;
    }
    if (!isExact || !data) {
        // create a 404 page
        return <p>ERROR</p>;
    }
    const { blogPost } = data;
    // console.log(data, blogPost);
    return (
        <Layout>
            <main className="container">
                <div id="content">
                    <DivMain id="main">
                        <ArticlePost>
                            <PostHeader>
                                <span className="cat">
                                    <Link to="/">
                                        <p>{data && blogPost.categories}</p>
                                    </Link>
                                </span>
                                <h2>
                                    <p>{data && blogPost.title}</p>
                                </h2>
                                <span className="date published">
                                    {moment(
                                        data && blogPost.publishDate
                                    ).format("MMM Do, YYYY")}
                                </span>
                            </PostHeader>
                            <PostImg>
                                <Link to="/">
                                    <img
                                        src={data && blogPost.heroImage.url}
                                        alt={data && blogPost.title}
                                    />
                                </Link>
                            </PostImg>
                            <PostEntry>
                                <p>{data && blogPost.body}</p>
                            </PostEntry>
                            <PostMeta>
                                <div className="meta-share">
                                    <span className="share-text">Share</span>
                                    <a href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/#">
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
