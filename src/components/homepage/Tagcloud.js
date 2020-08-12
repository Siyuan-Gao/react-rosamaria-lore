import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useContentful from "../../hooks/useContentful";
import { queryForTags, uniquePostTags } from "../../utils/queries";

function Tagcloud({ children }) {
    let { data, errors } = useContentful(queryForTags);

    if (!data) {
        return <p>Loading...</p>;
    }
    if (errors) {
        return <span>{errors.map((error) => error.message).join(",")}</span>;
    }
    // console.log(data);
    const { blogPostCollection } = data;
    const tags = uniquePostTags(blogPostCollection);
    return (
        <div className="widget">
            {children}
            <div className="tagcloud">
                {tags.map((tag) => (
                    <TagComponent key={tag} tagInfo={tag} />
                ))}
            </div>
        </div>
    );
}

const TagComponent = ({ tagInfo }) => (
    <TagLink>
        <Link
            to={{
                pathname: `/tag/${tagInfo}`,
                state: { tag: tagInfo },
            }}
        >
            <p>{tagInfo}</p>
        </Link>
    </TagLink>
);

const TagLink = styled.span`
    p {
        font-size: 9px !important;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: #f2f2f2;
        color: #777;
        padding: 6px 8px 7px;
        margin-right: 5px;
        margin-bottom: 8px;
        display: inline-block;
        -o-transition: 0.3s;
        -ms-transition: 0.3s;
        -moz-transition: 0.3s;
        -webkit-transition: 0.3s;
    }

    p:hover {
        opacity: 0.7;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Tagcloud;
