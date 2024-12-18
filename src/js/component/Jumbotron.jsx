import React from "react";
import PropTypes from "prop-types";


const jumboStyles = {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop:"60px"

}

const Jumbotron = (props) =>{

        return(
            <div className="container" style={jumboStyles}>
                <div className="jumbotron bg-secondary-subtle p-5">
                    <h1 className="display-4"><b>{props.title}</b></h1>
                    <p className="lead">{props.text1}</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">{props.textButton}</a>
                    </p>
                </div>
            </div>
            

        );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    text1: PropTypes.string,
    textButton: PropTypes.string,
};

export default Jumbotron;

