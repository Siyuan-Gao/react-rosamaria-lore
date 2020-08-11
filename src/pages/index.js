import React from "react";
// importing layout
import Layout from "../layout";
import Featured from "../components/homepage/FeaturedArea";
import PromoArea from "../components/homepage/PromoArea";
import MainBar from "../components/homepage/MainBar";
import Sidebar from "../components/homepage/Sidebar";
// contenful Hook
import useContentful from "../hooks/useContentful";
// Queries
import { queryAllPostsWithAuthors } from "../utils/queries";

export default function Home() {
    let { data, errors } = useContentful(queryAllPostsWithAuthors);

    if (errors)
        return (
            <span style={{ color: "red" }}>
                {errors.map((error) => error.message).join(",")}
            </span>
        );
    if (!data) return <p>Loading...</p>;
    const allPosts = data.blogPostCollection.items;

    return (
        <Layout>
            <main className="container">
                <Featured />
                <PromoArea />
                <div id="content">
                    <div className="main">
                        {/* <FreshArt article={blogPost} /> */}
                    </div>
                    <MainBar allPosts={allPosts} />
                    <Sidebar />
                </div>
            </main>
        </Layout>
    );
}
// export async function getStaticProps({ preview = false }) {
//     const allPosts = await getAllPostsForHome(preview);
//     return {
//         props: { preview, allPosts },
//     };
// }
