import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

// import styles from "../styles/Home.module.css";
// import client from "../utils/client";
// importing layout
import Layout from "../Layout";

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
                <h1>Welcome to my site!</h1>
                <p>Hello world</p>
                <div>
                    {articles.map((post) => (
                        <div>
                            <h1>{post.fields.title}</h1>
                            {/* <h5>{post.fields.author.fields.name}</h5> */}
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}
