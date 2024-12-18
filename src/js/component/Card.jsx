import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
    width: "18rem",  
    marginBottom: "20px"
}

const imgStyles = {
    height: "300px",
    
}

const Card = (props) => {

    return(
            <div className="card" style={cardStyles}>
                <img src="https://picsum.photos/id/237/200/300" style={imgStyles} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.textCard}</p>
                    <hr></hr>
                    <a href="#" className="btn btn-primary">{props.anchorText}</a>
                </div>
            </div>
    );
}

Card.propTypes = {
    cardTitle: PropTypes.string,
    textCard: PropTypes.string,
    anchorText: PropTypes.string,
};

export default Card;