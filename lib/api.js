// import { createClient } from "contentful";
import * as contentful from "contentful";
// const contentful = require("contentful");

export const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONT_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONT_TOKEN,
    // environment: process.env.NEXT_PUBLIC_CONT_ENVIR,
});

const previewClient = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONT_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONT_TOKEN,
    // environment: process.env.NEXT_PUBLIC_CONT_ENVIR,
});

const getClient = (preview) => (preview ? previewClient : client);

function parseAuthor({ fields }) {
    return {
        name: fields.name,
        image: fields.image.fields.file,
    };
}

function parsePost({ fields }) {
    return {
        title: fields.title,
        slug: fields.slug,
        author: getAuthor(fields.author),
        publishDate: fields.publishDate,
        // heroImage: fields.heroImage.fields.file,
        body: fields.body,
        categories: fields.categories,
        tags: fields.tags,
    };
}

function parsePostEntries(entries, cb = parsePost) {
    return entries?.items?.map(cb);
}

export async function getAllPostsWithSlug() {
    const entries = await client.getEntries({
        content_type: "blogPost",
        select: "fields.slug",
    });
    return parsePostEntries(entries, (post) => post.fields);
}

export async function getAllPostsForHome(preview) {
    const entries = await client.getEntries({
        content_type: process.env.NEXT_PUBLIC_CONT_BLOGT,
        order: "sys.createdAt",
    });
    return parsePostEntries(entries);
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
