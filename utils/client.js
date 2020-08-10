import * as contentful from "contentful";

const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONT_TOKEN,
    space: process.env.NEXT_PUBLIC_CONT_SPACE,
});

export default client;
