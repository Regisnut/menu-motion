import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import { useLocation } from '@reach/router';

const Header = ({ setMenuState, menuState, setCursorHovered }) => {
	//tips pour avoir le menu fermé à chq chgt d page
	const location = useLocation();
	useEffect(
		() => {
			setMenuState(false);
		},
		[ location ]
	);

	return (
		<header>
			<div className="container fluid">
				<div className="header-inner">
					<Link activeClassName="active" to="/">
						Pocket.
					</Link>
					<div
						onClick={() => setMenuState(true)}
						className="hamburger-menu"
						onMouseEnter={() => setCursorHovered(true)}
						onMouseLeave={() => setCursorHovered(false)}
					>
						<span />
						<span />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
