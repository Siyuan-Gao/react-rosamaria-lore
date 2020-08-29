import React from 'react';
import { Link } from 'react-router-dom';
// local
import SlickUL from '../styled/SlickUL';

const ActualMenu = ({ showMenu }) => {
	return (
		<SlickUL style={showMenu ? { display: 'block' } : { display: 'none' }}>
			<li className="men-it">
				<Link className="a2x" to="/">
					Home
				</Link>
			</li>
			<li className="men-it">
				<Link className="a2x" to="/about-me">
					About
				</Link>
			</li>
			<li className="men-it">
				<Link className="a2x" to="/posts">
					Posts
				</Link>
			</li>
			<li className="men-it">
				<Link className="a2x" to="/projects">
					Projects
				</Link>
			</li>
			<li className="men-it">
				<Link className="a2x" to="/contact">
					Contact
				</Link>
			</li>
		</SlickUL>
	);
};

export default ActualMenu;
