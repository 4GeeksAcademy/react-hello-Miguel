import React from "react";
import PropTypes from "prop-types";

const Footer  = (props)=>{

    return(

        <footer className="fixed-bottom bg-dark text-white text-center py-4">
            <div className="container">
                <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p> {/* Lo puse así para probar este de fecha. */}
            </div>
        </footer>

    );
}

export default Footer;