import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">NewsAI</div>


            <div className="search-bar">
                <input type="text" placeholder="Search news..." />
                <button>Search</button>
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/summaries">MySummaries</Link>

            </div>


        </nav>
    );
};
export default Navbar;