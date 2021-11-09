import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink to={"/blogs"}>Blogs</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
        </nav>
    )
}

export default Nav;