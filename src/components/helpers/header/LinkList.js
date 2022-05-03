import React from "react";
import {NavLink} from "react-router-dom";

export const LinkList = () => (
    <div className='nav-bar'>
        <NavLink className='nav-item' activeClassName='nav-active' to='/'>
            News
        </NavLink>
        <NavLink className='nav-item' activeClassName='nav-active' to='/sport'>
            Sport
        </NavLink>
        <NavLink className='nav-item' activeClassName='nav-active' to='/culture'>
            Culture
        </NavLink>
        <NavLink className='nav-item' activeClassName='nav-active' to='/science'>
            Science
        </NavLink>
        <NavLink className='nav-item' activeClassName='nav-active' to='/weather'>
            Weather
        </NavLink>
    </div>
)