import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const RichTextOptions = {
	renderMark: {
		[MARKS.BOLD]: (node) => {
			return (
				<strong
					style={{
						fontWeight: '700',
					}}
				>
					{node}
				</strong>
			);
		},
		[MARKS.ITALIC]: (node) => {
			return (
				<i
					style={{
						fontStyle: 'italic',
					}}
				>
					{node}
				</i>
			);
		},
		[MARKS.UNDERLINE]: (node) => {
			return (
				<u
					style={{
						color: '#000 !important',
					}}
				>
					{node}
				</u>
			);
		},
	},
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			return (
				<a
					href={node.data.uri}
					style={{
						color: '#c69f73',
						lineHeight: '24px',
					}}
				>
					{children}
				</a>
			);
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return (
				<p
					style={{
						lineHeight: '24px',
						marginBottom: '20px',
					}}
				>
					{children[0].length > 200
						? `${children[0].substring(0, 200)}...`
						: children[0]}
				</p>
			);
		},
		[BLOCKS.HEADING_1]: (node, children) => {
			return (
				<h1
					style={{
						color: '#000',
						fontSize: '26px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h1>
			);
		},
		[BLOCKS.HEADING_2]: (node, children) => {
			return (
				<h2
					style={{
						color: '#000',
						fontSize: '24px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h2>
			);
		},
		[BLOCKS.HEADING_3]: (node, children) => {
			return (
				<h3
					style={{
						color: '#000',
						fontSize: '21px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h3>
			);
		},
		[BLOCKS.HEADING_4]: (node, children) => {
			return (
				<h4
					style={{
						color: '#000',
						fontSize: '19px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h4>
			);
		},
		[BLOCKS.HEADING_5]: (node, children) => {
			return (
				<h5
					style={{
						color: '#000',
						fontSize: '17px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h5>
			);
		},
		[BLOCKS.HEADING_6]: (node, children) => {
			return (
				<h6
					style={{
						color: '#000',
						fontSize: '15px',
						marginBottom: '20px',
						fontWeight: '400',
						fontFamily: 'Georgia',
					}}
				>
					{children}
				</h6>
			);
		},
		[BLOCKS.QUOTE]: (node, children) => {
			return (
				<blockquote
					style={{
						borderLeft: 'none',
						padding: '30px 60px',
						margin: '20px 0 0',
					}}
				>
					<p
						className="block-par"
						style={{
							fontFamily: 'Georgia',
							fontSize: '20px',
							lineHeight: '30px',
							fontStyle: 'italic',
							color: '#000',
							position: 'relative',
						}}
					>
						{children}
					</p>
				</blockquote>
			);
		},
		[BLOCKS.UL_LIST]: (node, children) => {
			return (
				<ul
					style={{
						paddingLeft: '45px',
						marginBottom: '20px',
						listStyle: 'none',
					}}
				>
					{children}
				</ul>
			);
		},
		[BLOCKS.OL_LIST]: (node, children) => {
			// console.log(node);
			return (
				<ol
					style={{
						listStyle: 'none',
						paddingLeft: '45px',
						marginBottom: '20px',
					}}
				>
					{children}
				</ol>
			);
		},
		[BLOCKS.LIST_ITEM]: (node, children) => {
			return (
				<li
					style={{
						listStyle: 'none',
						marginBottom: '12px',
					}}
				>
					{children}
				</li>
			);
		},
		[BLOCKS.HR]: () => {
			return (
				<hr
					style={{
						display: 'block',
						marginBottom: '20px',
						border: 'none',
						height: '0',
						borderBottom: '1px solid #e5e5e5',
						clear: 'both',
					}}
				/>
			);
		},
	},
};

export default function GridBody({ content }) {
	// console.log(content);
	return <>{documentToReactComponents(content, RichTextOptions)}</>;
}
