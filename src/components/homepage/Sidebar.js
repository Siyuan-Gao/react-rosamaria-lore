import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// local imports
import Socials from "./SidebarSocials";
import CategoryList from "./CategoryLists";
import Tagcloud from "./Tagcloud";

function Sidebar() {
    const profileUrl =
        "https://images.ctfassets.net/0dpthcqf2ojw/HHnDuRQcq6gI1NNVrhxeH/9bc853fc893e9680e64456da5a451136/IMG_0009.jpg?h=250";
    return (
        <aside id="sidebar">
            {/* ABOUT ME */}
            <div id="about-widget" className="widget">
                <WidgetTitle>About Me</WidgetTitle>
                <AboutWidget>
                    <img src={profileUrl} alt="lore" className="about-round" />
                    <p>
                        A higher education professional committed to helping
                        students and prospective students navigate their
                        education journey with maximum understanding of the
                        commitment they are making...
                    </p>
                    <Link to="/about-me">
                        <p>Read More</p>
                    </Link>
                </AboutWidget>
            </div>
            {/* Sidebar components */}
            <Socials className="widget">
                <WidgetTitle>Subscribe & Follow</WidgetTitle>
            </Socials>
            {/* SUBSCRIBE */}
            {/* PROMOTED Types */}
            {/* CATEGORIES LIST */}
            <CategoryList id="categories">
                <WidgetTitle>CATEGORIES</WidgetTitle>
            </CategoryList>
            {/* TAG CLOUD */}
            <Tagcloud>
                <WidgetTitle>Tag Cloud</WidgetTitle>
            </Tagcloud>
        </aside>
    );
}
// NORMAL COMPONENTS

// STYLED COMPONENTS
const WidgetTitle = styled.h4`
    border: 1px solid;
    border-color: #c69f73;
    font-size: 10px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Lato";
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    padding: 16px 0;
`;
const AboutWidget = styled.div`
    text-align: center;

    img {
        margin-bottom: 10px;
        max-width: 100%;
        height: auto;
    }
    .about-round {
        border-radius: 50% !important;
    }
`;

export default Sidebar;
