import React from 'react';
// locals
import Footy from '../styled/Footy';

function Footer() {
	return (
		<Footy>
			<div className="container">
				<p className="left">© 2020 Lorain Ambrocio.</p>
				<p className="right">
					Coded with ❤{' '}
					<a href="http://markambrocio.com"> Mark Ambrocio</a>
				</p>
			</div>
		</Footy>
	);
}
export default Footer;
