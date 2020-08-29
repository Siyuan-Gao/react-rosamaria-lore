import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// local
import NavM from '../styled/NavMainMobile';
import ActualMenu from '../MobileMenu/ActualMobileMenu';

function MobileMenuu() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div id="mobile-men">
			<NavM>
				<p>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setShowMenu(!showMenu);
						}}
					/>
				</p>
				<ActualMenu showMenu={showMenu} />
			</NavM>
		</div>
	);
}
export default MobileMenuu;
