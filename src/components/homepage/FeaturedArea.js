import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// local components
import FeaturedItem from './FeaturedItem';

// hooks
import useContentful from '../../hooks/useContentful';
import { querySliderFeaturedPosts } from '../../utils/queries';

export default function FeaturedArea() {
    const sliderSettings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        autoplay: true,
        autoPlaySpeed: 3500,
        dots: true,
    };

    let { data, errors } = useContentful(querySliderFeaturedPosts);

    if (!data) {
        return <p>loading...</p>;
    }
    if (errors) {
        return <p>Error!</p>;
    }
    const { blogPostCollection } = data;
    // console.log(blogPostCollection.items);
    return (
        <Featured id="side-slides">
            <BxSlider id="bx-wrapper">
                <Slider {...sliderSettings}>
                    {data &&
                        blogPostCollection.items.map((feat) => (
                            <FeaturedItem key={feat.sys.id} featInfo={feat} />
                        ))}
                </Slider>
            </BxSlider>
        </Featured>
    );
}

const Featured = styled.div`
    margin-bottom: 60px;
`;

const BxSlider = styled.div`
    position: relative;
    padding: 0;
    *zoom: 1;
`;
