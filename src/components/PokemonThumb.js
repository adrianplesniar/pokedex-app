import React, { useState } from 'react'

const PokemonThumb = ({image, name, type, height, weight, _callback }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="thumb-container">
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                {showDetails && (
                    <>
                        <small>Height: {height}</small>
                        <small>Weight: {weight}</small>
                    </>
                )}
                <button onClick={() => setShowDetails(showDetails => !showDetails)}>{!showDetails ? 'Show more details' : 'Show less details'}</button>
            </div>
        </div>
    )
}

export default PokemonThumb
