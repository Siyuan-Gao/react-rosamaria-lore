import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// locals
import FeatItem from '../styled/featuredItem/FeatItem';
import FeatOverlay from '../styled/featuredItem/FeatOverlay';
import FeatOverlayInner from '../styled/featuredItem/FeatOverlayInner';
import PostHeader from '../styled/featuredItem/FeatHeader';
import CatH2 from '../styled/featuredItem/FeatH2';
import CatA from '../styled/featuredItem/FeatLink';
import SpanDate from '../styled/featuredItem/FeatDate';
import ButtonReadMore from '../styled/featuredItem/FeatMoreButton';

function FeaturedItem({ featInfo }) {
	const { heroImage, categories, slug, sys, title, publishDate } = featInfo;

	return (
		<FeatItem image={heroImage.url}>
			<FeatOverlay>
				<FeatOverlayInner>
					<PostHeader id="post-header">
						<span className="cat">
							<Link
								to={{
									pathname: `/category/${categories[0].toLowerCase()}`,
									state: { category: categories[0] },
								}}
							>
								<CatA>
									{/* CATERGORY */}
									{featInfo && categories[0]}
								</CatA>
							</Link>
						</span>
						<CatH2>
							<Link
								to={{
									pathname: `/posts/${slug.toLowerCase()}`,
									state: { postID: sys.id },
								}}
							>
								<p>
									{/* BLOG TITLE */}
									{featInfo && title}
								</p>
							</Link>
						</CatH2>
						<SpanDate>
							{/* BLOG POSTED DATE */}
							{moment(publishDate).format('MMM Do, YYYY')}
						</SpanDate>
						<ButtonReadMore>
							<Link
								to={{
									pathname: `/posts/${slug.toLowerCase()}`,
									state: { postID: sys.id },
								}}
							>
								<p>Read More</p>
							</Link>
						</ButtonReadMore>
					</PostHeader>
				</FeatOverlayInner>
			</FeatOverlay>
		</FeatItem>
	);
}

export default FeaturedItem;
