/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink, Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { shallowEqual, useSelector } from "react-redux";


export function HeaderMenu({ layoutProps }) {
    const {isAuthorized} = useSelector(
        ({auth}) => ({
            isAuthorized: auth.user != null,
        }),
        shallowEqual
      );

    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/shop')}`}>
                <NavLink className="menu-link" to="/shop">
                    <span className="menu-text">All</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/services')}`}>
                <NavLink className="menu-link" to="/services">
                    <span className="menu-text">Custom</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/premade')}`}>
                <NavLink className="menu-link" to="/premade">
                    <span className="menu-text">Premade</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/addons')}`}>
                <NavLink className="menu-link" to="/addons">
                    <span className="menu-text">Addons</span>
                    <span className="nav-addon">New</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                {!isAuthorized ? (
                        /*Render auth page when user at `/auth` and not authorized.*/
                    <NavLink className="menu-link" to="/auth/login">
                        <button
                            type="button"
                            className="btn btn-transparent-white font-weight-bold"
                        >
                            LOGIN
                        </button>    
                    </NavLink>   
                ) : (
                        /*Otherwise redirect to root page (`/`)*/
                    <Link
                    to="/logout"
                    className="menu-link"
                    >
                        <button
                            type="button"
                            className="btn btn-transparent-white font-weight-bold"
                        >
                            LOGOUT
                        </button>
                    </Link>
                )} 
            </li>
            {/*end::1 Level*/}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
