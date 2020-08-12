import React from "react";
import styled from "styled-components";
import useContentful from "../../hooks/useContentful";
import { queryForCategories, categoriesCounter } from "../../utils/queries";

function CategoryList({ children }) {
    let { data, errors } = useContentful(queryForCategories);

    if (errors) {
        return <span>{errors.map((error) => error.message).join(",")}</span>;
    }
    if (!data) {
        return <p>Loading...</p>;
    }
    const { blogPostCollection } = data;
    // get counted object
    const catOBJ = categoriesCounter(blogPostCollection);
    // create arrays to seperate them
    const catNames = Object.keys(catOBJ);
    const catValues = Object.values(catOBJ);

    return (
        <div className="widget-categories widget">
            {children}
            <ul>
                {/* MAP through and combine => then display! */}
                {catNames.map((cat, idx) => (
                    <CatWidgetListItem
                        key={cat}
                        name={cat}
                        sum={catValues[idx]}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;

const CatWidgetListItem = ({ name, sum }) => (
    <WidgetCatLi>
        <a href={`/category/${name}`}>{name}</a>({sum})
    </WidgetCatLi>
);
const WidgetCatLi = styled.li`
    margin-bottom: 7px;
    padding-bottom: 8px;
    border-bottom: 1px dotted #d5d5d5;
    color: #999;
    a {
        color: #424242;
        margin-right: 5px;
    }
    a:hover {
        text-decoration: underline;
    }
`;
