import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
// importing layout
import Layout from "../Layout";
import Featured from "../components/HomePage/FeaturedArea";
import PromoArea from "../components/HomePage/PromoArea";
import MainBar from "../components/HomePage/MainBar";
import Sidebar from "../components/HomePage/Sidebar";

import { getAllPostsForHome } from "../lib/api";

export default function Home({ preview, allPosts }) {
    // const [isloading, setIsLoading] = useState(false);
    // const [articles, setArticles] = useState([]);

    if (isloading) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <Head>
                <title>Lorain Ambrocio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <Featured />
                <PromoArea />
                <div id="content">
                    <MainBar allPosts={allPosts} />
                    <Sidebar />
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    await console.log(allPosts[0].heroImage.fields.file);
    return {
        props: { preview, allPosts },
    };
}
