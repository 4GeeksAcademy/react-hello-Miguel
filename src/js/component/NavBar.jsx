import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) =>{

    return(

        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link active " aria-current="page" href="#">{props.navItem1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="#">{props.navItem2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="#">{props.navItem3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " aria-disabled="true">{props.navItem4}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
	title: PropTypes.string,
	navItem1: PropTypes.string,
    navItem2: PropTypes.string,
    navItem3: PropTypes.string,
    navItem4: PropTypes.string,
};
export default NavBar;