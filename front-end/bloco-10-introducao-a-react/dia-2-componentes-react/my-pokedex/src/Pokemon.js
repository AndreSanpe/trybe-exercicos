import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image, moreInfo } } = this.props;
        return (
            <div>
            <article className="pokemon">
                <div>
                    <h2>{name}</h2>
                    <h2>{type}</h2>
                    <h2>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</h2>
                </div>
                <img src={image} alt={name}></img>
            </article>
                <div className="link">
                    <a href={moreInfo} target="_blank" without rel="noreferrer"> more info </a>
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;
