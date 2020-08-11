import axios from "axios";

const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_TOKEN } = process.env;
export const graphWithAuth = () =>
    // create a local token
    axios.create({
        baseURL: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}/`,
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_TOKEN}`,
        },
    });
//?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}
