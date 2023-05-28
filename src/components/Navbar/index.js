import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                    <NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/connexion" activeStyle>
						Connexion
					</NavLink>
					<NavLink to="/account" activeStyle>
						Account
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
