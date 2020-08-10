import React from "react";
import styled from "styled-components";
import Link from "next/link";

const DivPromoArea = styled.div`
    overflow: hidden;
    margin-bottom: 60px;
`;

const DivPromoItem = styled.div`
    background-image: url(${(props) => props.image || ""});
    display: table;
    width: 340px;
    float: left;
    margin-right: 30px;
    height: 190px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 16px;
    position: relative;

    .promo-overlay {
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;

        h4 {
            color: #000;
            line-height: 1.5em;
            padding: 12px 16px 12px 17px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: #fff;
            display: inline-block;
            max-width: 65%;
            font-family: "Lato", sans-serif;
            -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
            box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
        }
    }
`;

function PromoArea() {
    const img1 =
        "https://solopine.com/rosemary/wp-content/uploads/2018/07/post4.jpg";
    const img2 =
        "https://solopine.com/rosemary/wp-content/uploads/2018/07/post5.jpg";
    const img3 =
        "https://solopine.com/rosemary/wp-content/uploads/2018/07/post8.jpg";
    return (
        <DivPromoArea className="p-slider">
            <DivPromoItem image={img1} className="p-item">
                {/* CHANGE URLS */}
                <Link href="/">
                    <a className="promo-link"></a>
                </Link>
                <div className="promo-overlay">
                    <h4>Follow @ Twitter</h4>
                </div>
            </DivPromoItem>
            <DivPromoItem image={img2} className="p-item">
                {/* CHANGE URLS */}
                <Link href="/">
                    <a className="promo-link"></a>
                </Link>
                <div className="promo-overlay">
                    <h4>About Me</h4>
                </div>
            </DivPromoItem>
            <DivPromoItem image={img3} className="p-item">
                {/* CHANGE URLS */}
                <Link href="/">
                    <a className="promo-link"></a>
                </Link>
                <div className="promo-overlay">
                    <h4>Contact</h4>
                </div>
            </DivPromoItem>
        </DivPromoArea>
    );
}

export default PromoArea;
