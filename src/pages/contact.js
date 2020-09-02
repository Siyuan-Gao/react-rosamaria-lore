import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
// local imports
import Layout from '../layout';
import Siderbar from '../components/homepage/Sidebar';
import DivMain from '../components/styled/DivMain';
import PostHeader from '../components/styled/PostHeader';
import PostEntry from '../components/styled/PostEntry';
import PostMeta from '../components/PostMetaComponent';
import PostComments from '../components/styled/PostComments';
import ContactForm from '../components/contact';

export default function Contact() {
	const contactImg =
		'https://solopine.com/rosemary/wp-content/uploads/2015/03/post8.jpg';
	return (
		<Layout>
			<main className="container">
				<div className="content">
					<DivMain className="main">
						<article>
							<PostHeader>
								<h1>Contact</h1>
							</PostHeader>
							<PostImg>
								{/* <a href="#"> */}
								<LazyLoad>
									<img src={contactImg} alt="contact" />
								</LazyLoad>
								{/* </a> */}
							</PostImg>
							<PostEntry>
								<p>
									Meh synth Schlitz, tempor duis single-origin
									coffee ea next level ethnic fingerstache
									fanny pack nostrud. Photo booth anim 8-bit
									hella, PBR 3 wolf moon beard Helvetica.
									Salvia esse nihil, flexitarian Truffaut
									synth art party deep v chillwave. Seitan
									High Life reprehenderit consectetur
									cupidatat kogi. Et leggings fanny pack
									tempor duis single-origin coffee. Photo
									booth anim 8-bit hella, PBR 3 wolf moon.
								</p>
								<div>
									<div>
										<ContactForm />
									</div>
								</div>
							</PostEntry>
							<PostMeta />
							<PostComments />
						</article>
					</DivMain>
					<Siderbar />
				</div>
			</main>
		</Layout>
	);
}

// const PostHeader = styled.div`
// 	margin-bottom: 25px;
// 	text-align: center;
// 	h1 {
// 		color: #000;
// 		font-size: 26px;
// 		-o-transition: 0.2s;
// 		-ms-transition: 0.2s;
// 		-moz-transition: 0.2s;
// 		-webkit-transition: 0.2s;
// 	}
// `;
const PostImg = styled.div`
	margin-bottom: 20px;
	text-align: center;
	img {
		max-width: 100%;
		height: auto;
		border: none;
	}

	a img {
		border: none;
	}
`;
