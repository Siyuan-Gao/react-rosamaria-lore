import React from 'react';
import { Link } from 'react-router-dom';
// locals
import DivPromoArea from '../styled/promoArea/PromoArea';
import DivPromoItem from '../styled/promoArea/PromoItem';
import * as links from '../../utils/Constants';

function PromoArea() {
	const img1 =
		'https://solopine.com/rosemary/wp-content/uploads/2018/07/post4.jpg';
	const img2 =
		'https://solopine.com/rosemary/wp-content/uploads/2018/07/post5.jpg';
	const img3 =
		'https://solopine.com/rosemary/wp-content/uploads/2018/07/post8.jpg';
	return (
		<DivPromoArea className="p-slider">
			<DivPromoItem image={img1} className="p-item">
				<a href={links.TWITTER_LINK} className="promo-link">
					{' '}
				</a>
				<div className="promo-overlay">
					<h4>@Twitter</h4>
				</div>
			</DivPromoItem>
			<DivPromoItem image={img2} className="p-item">
				{/* CHANGE URLS */}
				<Link to="/about-me" className="promo-link">
					{/* <a href="#" className="promo-link"> */} {/* </a> */}
				</Link>
				<div className="promo-overlay">
					<h4>About Me</h4>
				</div>
			</DivPromoItem>
			<DivPromoItem image={img3} className="p-item">
				{/* CHANGE URLS */}
				<Link to="/contact" className="promo-link">
					{/* <a href="#" className="promo-link"> */} {/* </a> */}
				</Link>
				<div className="promo-overlay">
					<h4>Contact</h4>
				</div>
			</DivPromoItem>
		</DivPromoArea>
	);
}

export default PromoArea;
