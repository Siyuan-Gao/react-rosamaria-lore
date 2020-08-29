import React from 'react';
import { Link } from 'react-router-dom';
// local imports
import Socials from './SidebarSocials';
import CategoryList from './CategoryLists';
import Tagcloud from './Tagcloud';
import WidgetTitle from '../styled/sidebar/WidgetTitle';
import AboutWidget from '../styled/sidebar/AboutWidget';
import { PROFILE_PIC } from '../../utils/Constants';

function Sidebar() {
	return (
		<aside id="sidebar">
			{/* ABOUT ME */}
			<div id="about-widget" className="widget">
				<WidgetTitle>About Me</WidgetTitle>
				<AboutWidget>
					<img src={PROFILE_PIC} alt="lore" className="about-round" />
					<p>
						A higher education professional committed to helping
						students and prospective students navigate their
						education journey with maximum understanding of the
						commitment they are making...
					</p>
					<Link to="/about-me">
						<p>Read More</p>
					</Link>
				</AboutWidget>
			</div>
			{/* Sidebar components */}
			<Socials className="widget">
				<WidgetTitle>Subscribe & Follow</WidgetTitle>
			</Socials>
			{/* SUBSCRIBE */}
			{/* PROMOTED Types */}
			{/* CATEGORIES LIST */}
			<CategoryList id="categories">
				<WidgetTitle>CATEGORIES</WidgetTitle>
			</CategoryList>
			{/* TAG CLOUD */}
			<Tagcloud>
				<WidgetTitle>Tag Cloud</WidgetTitle>
			</Tagcloud>
		</aside>
	);
}

export default Sidebar;
