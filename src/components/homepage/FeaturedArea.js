import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// local components
import FeaturedItem from "./FeaturedItem";

const Featured = styled.div`
    margin-bottom: 60px;
`;

const BxSlider = styled.div`
    position: relative;
    padding: 0;
    *zoom: 1;
`;

export default function FeaturedArea() {
    const sliderSettings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        autoplay: true,
        autoPlaySpeed: 3500,
    };
    return (
        <Featured id="side-slides">
            <BxSlider id="bx-wrapper">
                <Slider {...sliderSettings}>
                    {/* {data.map((feat) => (
                        <FeaturedItem {...feat} />
                    ))} */}
                </Slider>
            </BxSlider>
        </Featured>
    );
}
