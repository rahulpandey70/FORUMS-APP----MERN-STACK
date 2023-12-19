import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Search from "./Search";
import Menu from "./Menu";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img
							onClick={() => window.scrollTo({ top: 0 })}
							src={Logo}
							alt="Logo"
						/>
					</Link>
				</div>
				<div className="header__nav">
					<Search />
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default Header;
