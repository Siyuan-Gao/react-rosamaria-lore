import React, { useState } from "react";
import styled from "styled-components";

const TopSearch = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding-left: 16px;
    border-left: 1px solid;
    border-color: #e8e8e8;
    z-index: 999;

    form {
        display: inline;
    }

    input {
        border: none;
        font-style: italic;
        width: 135px;
        background: 0 0;
        margin-right: 2px;
    }
    input:focus {
        outline: none;
    }

    i {
        font-size: 14px;
        line-height: 51px;
    }

    .fa-search:before {
        content: "\f002";
    }

    i.search-toggle {
        font-size: 14px;
        line-height: 51px;
        display: none;
        cursor: pointer;
    }
`;

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("## User searched for: ", searchTerm);
    };

    return (
        <TopSearch>
            <form id="searchForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search and hit enter..."
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleInput}
                />
            </form>
            <i className="fas fa-search search-desktop"></i>
            <i className="fas fa-search search-toggle"></i>
        </TopSearch>
    );
}
