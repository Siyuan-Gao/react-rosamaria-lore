import { createClient } from "contentful";

const client = createClient({
    space: process.env.NEXT_APP_CONT_SPACE,
    accessToken: process.env.NEXT_APP_CONT_TOKEN,
});

const previewClient = createClient({
    space: process.env.NEXT_APP_CONT_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONT_PRTKN,
});

const getClient = (preview) => (preview ? previewClient : client);

function parseAuthor({ fields }) {
    // will return an Author object
    return {
        name: fields.name,
        picture: fields.picture.fields.file,
    };
}

function parsePost({ field }) {
    // will return a parsed post
    return {
        title: fields.title,
        slug: fields.slug,
        date: fields.date,
        content: fields.content,
        excerpt: fields.excerpt,
        coverImage: fields.coverImage.fields.file,
        author: parseAuthor(fields.author),
    };
}

function parsePostEntries(entries, cb = parsePost) {
    // will return array of parsed posts
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
    const entries = await getClient(preview).getEntries({
        content_type: "blogPost",
        order: "-fields.date",
    });
    return parsePostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
    const entry = await getClient(preview).getEntries({
        content_type: "blogPost",
        limit: 1,
        "fields.slug[in]": slug,
    });
    const entries = await getClient(preview).getEntries({
        content_type: "blogPost",
        limit: 2,
        order: "-fields.date",
        "fields.slug[nin]": slug,
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
        "fields.slug[in]": slug,
    });
    return parsePostEntries(entries)[0];
}
