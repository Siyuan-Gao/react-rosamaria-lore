import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

// import styles from "../styles/Home.module.css";
// import client from "../utils/client";
// importing layout
import Layout from "../Layout";
import Featured from "../components/HomePage/FeaturedArea";
import PromoArea from "../components/HomePage/PromoArea";
import MainBar from "../components/HomePage/MainBar";
import Sidebar from "../components/HomePage/Sidebar";

export default function Home() {
    const [isloading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     client
    //         .getEntries({
    //             content_type: "blogPost",
    //         })
    //         .then((res) => {
    //             console.log("yay", res.items);
    //             setArticles(res.items);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log("ERROR", err);
    //             setIsLoading(false);
    //         });
    // }, []);

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
                    <MainBar />
                    <Sidebar />
                </div>
            </main>
        </Layout>
    );
}
