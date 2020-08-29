import React from 'react';
// locals
import SocialWidget from '../styled/sidebar/SocialsWidget';
import * as links from '../../utils/Constants';

function SidebarSocials({ children }) {
	return (
		<SocialWidget id="socials-widget" className="widget">
			{children}
			<a href={links.LINKEDIN_LINK}>
				<i className="fa fa-linkedin"></i>
			</a>
			<a href={links.TWITTER_LINK}>
				<i className="fa fa-twitter"></i>
			</a>
			{/* <a href="#">
                <i className="fa fa-rss"></i>
            </a> */}
		</SocialWidget>
	);
}

export default SidebarSocials;
