import React from 'react';
// locals
import SocialsDiv from '../styled/TopSocialsDiv';
import * as Links from '../../utils/Constants';

export default function TopSocials() {
	return (
		<SocialsDiv>
			<a href={Links.LINKEDIN_LINK}>
				<i className="fa fa-linkedin" />
			</a>
			<a href={Links.TWITTER_LINK}>
				<i className="fa fa-twitter" />
			</a>
			{/* <a href="/#">
                <i className="fa fa-rss" />
            </a> */}
		</SocialsDiv>
	);
}
