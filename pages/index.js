import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
// importing layout
import Layout from "../Layout";
import Featured from "../components/HomePage/FeaturedArea";
import PromoArea from "../components/HomePage/PromoArea";
import MainBar from "../components/HomePage/MainBar";
import Sidebar from "../components/HomePage/Sidebar";

export default function Home() {
    const [isloading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
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
