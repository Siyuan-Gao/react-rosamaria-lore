import React from "react";
import styled from "styled-components";

const Footy = styled.div`
    clear: both;
    padding: 16px 0 28px;
    overflow: hidden;
    p {
        font-style: italic;
        font-size: 12px;
        color: #888;
    }

    .left {
        float: left;
    }
    .right {
        float: right;
    }
`;

function Footer() {
    return (
        <Footy>
            <div className="container">
                <p className="left">© 2020 Lorain Ambrocio.</p>
                <p className="right">
                    Coded with ❤{" "}
                    <a href="http://markambrocio.com"> Mark Ambrocio</a>
                </p>
            </div>
        </Footy>
    );
}
export default Footer;
