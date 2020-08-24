import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostArticle({ content }) {
    return (
        <PARTICLE>
            <PIMG>
                <Link to={`/posts/${content.slug}`}>
                    <img src={content.heroImage.url} alt={content.slug} />
                </Link>
            </PIMG>
            <ListItem>
                {/* HEADER */}
                <div
                    style={{
                        marginBottom: '14px',
                    }}
                >
                    {/* header */}
                    <PostCatSpan>
                        <Link
                            to={`/category/${content.categories[0]}`}
                            title={`View All Posts In ${content.categories[0]}`}
                        >
                            {content.categories[0]}
                        </Link>
                    </PostCatSpan>
                    <PostH2>
                        <Link to={`/posts/${content.slug}`}>
                            {content.title}
                        </Link>
                    </PostH2>
                </div>
                {/* ENTRY */}
                <div
                    style={{
                        marginBottom: '14px',
                    }}
                >
                    <p>{content.postDescription}</p>
                </div>
                {/* DATE */}
                <div>
                    <PostDate>
                        {moment(content.publishDate).format('MMM Do, YYYY')}
                    </PostDate>
                </div>
            </ListItem>
        </PARTICLE>
    );
}

const PARTICLE = styled.article`
    overflow: hidden;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
`;

const PIMG = styled.div`
    text-align: center;
    float: left;
    margin-right: 25px;
    margin-bottom: 0;

    img {
        max-width: 270px;
        height: auto;
    }
`;

const ListItem = styled.div`
    overflow: hidden;
`;

const PostCatSpan = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid;
    border-color: #c69f73;
    padding-bottom: 2px;
    display: inline-block;
    margin: 0 8px 7px 0;
`;

const PostH2 = styled.h2`
    a {
        font-size: 22px;
        color: #000;
        transition: 0.2s all;

        &:hover {
            opacity: 0.6;
        }
    }
`;

const PostDate = styled.span`
    font-size: 11px;
    font-style: italic;
    color: #999;
`;
