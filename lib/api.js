import * as contentful from "contentful";
import axios from "axios";

export const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONT_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONT_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONT_ENVIR,
});

const previewClient = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONT_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONT_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONT_ENVIR,
});

const getClient = (preview) => (preview ? previewClient : client);

function parseAuthor({ fields }) {
    return {
        name: fields.name,
        image: fields.image.fields.file,
    };
}

function parseImage({ fields }) {
    // console.log(image);
    return {
        // name: fields.title,
        image: fields.file.url,
    };
    // return {};
}

function parsePost({ fields }) {
    return {
        title: fields.title,
        slug: fields.slug,
        author: parseAuthor({ ...fields.author }),
        publishDate: fields.publishDate,
        heroImage: parseImage({ ...fields.heroImage }),
        body: fields.body,
        categories: fields.categories,
        tags: fields.tags,
    };
}

// function parsePostEntries(entries, cb = parsePost) {
//     return entries?.items?.map(cb);
// }

export async function getAllPostsWithSlug() {
    const entries = await client.getEntries({
        content_type: "blogPost",
        select: "fields.slug",
    });
    return parsePostEntries(entries, (post) => post.fields);
}

export function getAllPostsForHome(preview) {
    client
        .getEntries({
            content_type: process.env.NEXT_PUBLIC_CONT_BLOGT,
            order: "sys.createdAt",
        })
        .then((entries) => {
            console.log(entries);
            // return entries.items.map(parsePost);
            return parsePost(entries);
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
    // return entries.items.map(parsePost);
}

export async function getPostAndMorePosts(slug, preview) {
    const entry = await getClient(preview).getEntries({
        content_type: "blogPost",
        limit: 1,
        "field.slug[in]": slug,
    });
    const entries = await getClient(preview).getEntries({
        content_type: "blogPost",
        limit: 2,
        order: "-field.publishDate",
        "field.slug[nin]": slug,
    });
    return {
        post: parsePostEntries(entry)[0],
        morePosts: parsePostEntries(entries),
    };
}

export async function getPreviewPostBySlug(slug) {
    const entries = await getClient(true).getEntries({
        content_type: "post",
        limit: 1,
        "field.slug[in]": slug,
    });
    return parsePostEntries(entries)[0];
}

async function getAuthor(authorID) {
    console.log(authorID);
    const author = await client.getEntry(authorID);
    return parseAuthor(author);
}

export function fetchAllPosts() {
    axios
        .get(
            `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONT_SPACE}/environments/${process.env.NEXT_PUBLIC_CONT_ENVIR}/entries?access_token=${process.env.NEXT_PUBLIC_CONT_TOKEN}&content_type=blogPost`
        )
        .then(({ data }) => {
            // IMAGES: includes.Assets.map = setPost.heroImage =
            // POSTS: items.map fields
            console.log("RAW", data);
            return combinedPostData(data);
        })
        .catch((error) => {
            return console.log(error);
        });
}

function combinedPostData(data) {
    let allPostys = [];

    const authy = {
        name: data.includes.Entry[0].fields.name,
        image: data.includes.Asset[1].fields.file.url.replace("//", ""),
    };

    data.items.map((post) => allPostys.push({ ...post.fields }));

    data.includes.Asset.map((inc, idx) => {
        let properURL = inc.fields.file.url.replace("//", "");
        return (allPostys[idx] = {
            ...allPostys[idx],
            author: authy,
            heroImage: properURL,
        });
    });

    console.log("COMBINER", allPostys);
    return allPostys;
}
