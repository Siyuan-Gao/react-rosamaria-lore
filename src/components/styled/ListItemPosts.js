import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LazyLoad from 'react-lazyload';

export default function PostArticle({ content }) {
	return (
		<PARTICLE>
			<PIMG>
				<Link to={`/posts/${content.slug}`}>
					<LazyLoad>
						<img src={content.heroImage.url} alt={content.slug} />
					</LazyLoad>
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
				<PostEntry>
					<p>{content.postDescription}</p>
				</PostEntry>
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

	@media ${({ theme }) => theme.mediaQ.Xs} {
		margin-right: 16px;
		img {
			max-width: 90px;
		}
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		margin-right: 22px;
		img {
			max-width: 180px;
		}
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

	@media ${({ theme }) => theme.mediaQ.Xs} {
		margin-bottom: 6px;
		a {
			font-size: 16px;
		}
	}
	@media ${({ theme }) => theme.mediaQ.Sm} {
		margin-bottom: 8px;
		a {
			font-size: 20px;
		}
	}
`;

const PostDate = styled.span`
	font-size: 11px;
	font-style: italic;
	color: #999;
`;

const PostEntry = styled.div`
	margin-bottom: 14px;

	@media ${({ theme }) => theme.mediaQ.Xs} {
		p {
			display: none;
		}
	}
`;
