import React from 'react';
import styled from 'styled-components';

// HOOKS for active links
import ALink from '../../hooks/ActiveLink';

// imported styled comps
import { NavWrapper, MenuMenu, MenuItem } from '../styled/NavMenuLinks';
import SearchBar from './TopSearchBar';
import ShowSearch from './ShowSearch';
import TopSocials from './TopSocials';
import MobileMenuu from '../MobileMenu/MobileMenu';
import TopNav from '../styled/TopNav';

function TopNavBar() {
	return (
		<TopNav id="top-nav-bar">
			<NavContainer className="container">
				<NavWrapper id="nav-wrapper">
					<MenuMenu id="menu">
						<MenuItem>
							<ALink to="/" activeClassName="active">
								<p>Home</p>
							</ALink>
						</MenuItem>
						<MenuItem>
							<ALink to="/about-me" activeClassName="active">
								<p>About</p>
							</ALink>
						</MenuItem>
						<MenuItem>
							<ALink to="/posts" activeClassName="active">
								<p>Posts</p>
							</ALink>
						</MenuItem>
						<MenuItem>
							<ALink to="/projects" activeClassName="active">
								<p>Projects</p>
							</ALink>
						</MenuItem>
						<MenuItem>
							<ALink to="/contact" activeClassName="active">
								<p>Contact</p>
							</ALink>
						</MenuItem>
					</MenuMenu>
				</NavWrapper>
				<MobileMenuu />
				<SearchBar />
				<ShowSearch id="mobileSearch" />
				<TopSocials />
			</NavContainer>
		</TopNav>
	);
}

const NavContainer = styled.div`
	position: relative;
`;

export default TopNavBar;
