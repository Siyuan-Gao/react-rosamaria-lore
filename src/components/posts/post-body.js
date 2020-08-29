import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
// locals
import PostUL from '../styled/posts/PostUL';
import PostOL from '../styled/posts/PostOL';
import PostHr from '../styled/posts/PostHr';
import PostBlockQuote from '../styled/posts/PostBlockQuote';
import GetEmbeddedImg from '../../hooks/GetEmbeddedImg';

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
						color: '#eb4034 !important',
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
				// style={{
				//     lineHeight: '24px',
				//     marginBottom: '20px',
				// }}
				>
					{children}
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
			return <PostBlockQuote>{children}</PostBlockQuote>;
		},
		[BLOCKS.UL_LIST]: (node, children) => {
			return <PostUL>{children}</PostUL>;
		},
		[BLOCKS.OL_LIST]: (node, children) => {
			// console.log(node);
			return <PostOL>{children}</PostOL>;
		},
		[BLOCKS.HR]: () => {
			return <PostHr />;
		},
		// IMAGES
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			// console.log('node', node);
			return (
				<GetEmbeddedImg assetID={node.data.target.sys.id} width={400} />
			);
		},
	},
};

export default function PostBody({ content }) {
	return <div>{documentToReactComponents(content, RichTextOptions)}</div>;
}
