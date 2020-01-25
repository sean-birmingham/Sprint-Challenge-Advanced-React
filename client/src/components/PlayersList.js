import React from "react";
import PlayerCard from "./PlayerCard";

const PlayersList = ({ players }) => {
    return (
        <div className="list-wrap">
            {players.map(player => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}

export default PlayersList;