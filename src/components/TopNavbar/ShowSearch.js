import React, { useState } from "react";
import styled from "styled-components";

const MobileSearch = styled.div`
    position: absolute;
    top: 51px;
    right: -1px;
    display: none;
    z-index: 10000;

    input {
        width: 190px;
        background: #fff;
        -webkit-box-shadow: 0 5px 4px -4px rgba(190, 190, 190, 0.1);
        -moz-box-shadow: 0 5px 4px -4px rgba(190, 190, 190, 0.1);
        box-shadow: 0 5px 4px -4px rgba(190, 190, 190, 0.1);
        border: 1px solid #eee;
        padding: 10px 0 10px 10px;
        font-style: italic;
    }
    input:focus {
        border: 1px solid #ddd;
        outline: none;
    }
`;

export default function ShowSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("## User searched for: ", searchTerm);
    };

    return (
        <MobileSearch>
            <form id="searchForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search and hit enter..."
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleInput}
                />
            </form>
        </MobileSearch>
    );
}
