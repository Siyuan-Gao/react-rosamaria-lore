import React from 'react';
// importing layout
import Layout from '../layout';
import Featured from '../components/homepage/FeaturedArea';
import PromoArea from '../components/homepage/PromoArea';
import MainBar from '../components/homepage/MainBar';
import Sidebar from '../components/homepage/Sidebar';
// contenful Hook
import useContentful from '../hooks/useContentful';
import { queryPostsNotFeatured } from '../utils/queries';
import { Helmet } from 'react-helmet';

export default function Home() {
    let { data, errors } = useContentful(queryPostsNotFeatured);

    if (errors)
        return (
            <span style={{ color: 'red' }}>
                {errors.map((error) => error.message).join(',')}
            </span>
        );
    if (!data) return <p>Loading...</p>;
    const allPosts = data.blogPostCollection.items;
    // console.log(allPosts);
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lorain Ambrocio - Home</title>
                <meta
                    name="description"
                    content="Lorain Ambrocios thoughts and past works!"
                />
                <meta
                    name="keywords"
                    content="academic advising, higher education, blog,"
                />
                <meta
                    property="og:site_name"
                    content="Lorain Ambrocio\'s site"
                />
                <meta property="og:title" content="Lorain Ambrocio - Home" />
                <meta
                    property="og:description"
                    content="Thoughts and previous works in the higher education field."
                />
                <meta
                    property="og:image"
                    content="https://images.ctfassets.net/0dpthcqf2ojw/5bu2cMRooCz0MCcAUMs4a8/72ce863cf36fa1dbfb45bd13f163fd65/lore-logo.png?h=250"
                />
                <meta property="og:url" content="https://lorainambrocio.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:image:alt"
                    content="logo for lorainambrocio.com"
                />
            </Helmet>
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
// export async function getStaticProps({ preview = false }) {
//     const allPosts = await getAllPostsForHome(preview);
//     return {
//         props: { preview, allPosts },
//     };
// }
