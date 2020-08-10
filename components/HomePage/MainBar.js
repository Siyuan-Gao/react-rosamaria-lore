import styled from "styled-components";
import Link from "next/link";

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

function MainBar(props) {
    const articleImg =
        "https://solopine.com/rosemary/wp-content/uploads/2018/11/p1-1080x690.jpg";
    return (
        <DivMain id="main">
            <SpGrid className="p-grid">
                <FreshArticle articleImg={articleImg} />
                <li>
                    <GridArticle
                        className="grid-item"
                        articleImg={articleImg}
                    />
                </li>
                <li>
                    <GridArticle
                        className="grid-item"
                        articleImg={articleImg}
                    />
                </li>
                <li>
                    <GridArticle
                        className="grid-item"
                        articleImg={articleImg}
                    />
                </li>
                <li>
                    <GridArticle
                        className="grid-item"
                        articleImg={articleImg}
                    />
                </li>
            </SpGrid>
        </DivMain>
    );
}

export default MainBar;
export { DivMain };
