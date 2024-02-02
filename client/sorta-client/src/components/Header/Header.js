import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/svgs/sorta-logo.svg";
import ActiveStar from "../../assets/svgs/active-star.svg";
import Create from "../../assets/svgs/create-nav.svg";
import Login from "../../assets/svgs/login-nav.svg";
import Gallery from "../../assets/svgs/gallery-nav.svg";

const Header = () => {
    const location = useLocation();
    const isCreateOrEditActive = location.pathname === '/create' || location.pathname.includes('/edit');
    const isGalleryOrImageActive = location.pathname === '/gallery' || location.pathname.includes('/image');

    return (
        <header className="header">
            <div className="header--logo"><NavLink to="/"><img src={Logo} alt="sorta logo" /></NavLink></div>
            <nav className="nav">     
                    <ul className="nav-list">
                        <li className="nav-item ">
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                <img src={Login} alt="login"/>
                                <img src={ActiveStar} className="active-star" alt="active" />
                            </NavLink>
                            </li>
                        <li className="nav-item ">
                            <NavLink to="/create" className={isCreateOrEditActive ? "active-link" : ""}>
                                <img src={Create} alt="create"/>
                                {isCreateOrEditActive && <img src={ActiveStar} className="active-star" alt="active"/>}
                            </NavLink>
                            </li>
                        <li className="nav-item ">
                            <NavLink to="/gallery" className={isGalleryOrImageActive ? "active-link" : ""}>
                                <img src={Gallery} alt="gallery"/>
                                {isGalleryOrImageActive && <img src={ActiveStar} className="active-star" alt="active" />}
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header;