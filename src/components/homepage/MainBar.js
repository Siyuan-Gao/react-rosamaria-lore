import React from "react";

import styled from "styled-components";

// local imports
import FreshArticle from "./FreshArticle";
import GridArticle from "./GridArticle";

const DivMain = styled.div`
    width: 760px;
    float: left;
`;
const SpGrid = styled.div`
    li {
        width: 365px;
        display: inline-block;
        vertical-align: top;
        margin-right: 26px;

        .grid-item {
            margin-bottom: 40px;
        }
    }

    li:nth-of-type(2n + 2) {
        margin-right: 0;
    }
`;

function MainBar({ allPosts }) {
    return (
        <DivMain id="main">
            <SpGrid className="p-grid">
                <FreshArticle article={allPosts[0]} />
                {allPosts.splice(1).map((post) => (
                    <GridArt postInfo={post} />
                ))}
            </SpGrid>
        </DivMain>
    );
}

const GridArt = ({ postInfo }) => (
    <li>
        <GridArticle className="grid-item" postInfo={postInfo} />
    </li>
);

export default MainBar;
export { DivMain };
