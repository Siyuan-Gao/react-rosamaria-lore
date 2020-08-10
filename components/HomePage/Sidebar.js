import React from "react";
import Link from "next/link";
import styled from "styled-components";
// local imports
import Socials from "./SidebarSocials";
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
                        Meh synth Schlitz, tempor duis single-origin coffee ea
                        next level ethnic fingestace fanny pack nostrud.
                        Seitan...
                    </p>
                    <Link href="/">
                        <a>Read More</a>
                    </Link>
                </AboutWidget>
            </div>
            {/* Sidebar components */}
            <Socials className="widget">
                <WidgetTitle>Subscribe & Follow</WidgetTitle>
            </Socials>
            {/* SUBSCRIBE */}
            <div className="widget">
                <form></form>
            </div>
            {/* PROMOTED Types */}
            {/* CATEGORIES LIST */}
            <div className="widget-categories widget">
                <WidgetTitle>CATEGORIES</WidgetTitle>
                <ul>
                    {/* MAP through and count then display! */}
                    <CatWidgetListItem cat_name="Lifestyle" cat_sum="6" />
                    <CatWidgetListItem cat_name="Travel" cat_sum="3" />
                    <CatWidgetListItem cat_name="Featured" cat_sum="1" />
                </ul>
            </div>
            {/* TAG CLOUD */}
            <Tagcloud>
                <WidgetTitle>Tag Cloud</WidgetTitle>
            </Tagcloud>
        </aside>
    );
}
// NORMAL COMPONENTS
const CatWidgetListItem = ({ cat_name, cat_sum }) => (
    <WidgetCatLi>
        <a href={`/categories/${cat_name}`}>{cat_name}</a>({cat_sum})
    </WidgetCatLi>
);

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

export default Sidebar;
