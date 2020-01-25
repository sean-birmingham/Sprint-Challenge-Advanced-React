import React from "react";

const PlayerCard = ({ player }) => {
    return (
        <div>
            <h2>{player.name}</h2>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
        </div>
    )
}

export default PlayerCard;