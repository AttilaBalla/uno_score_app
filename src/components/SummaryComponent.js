import React from 'react';
import PlayerCardComponent from "./PlayerCardComponent";
import {CardGroup} from "semantic-ui-react";
import {useSelector} from "react-redux";

const SummaryComponent = () => {

    const gameData = useSelector(state => state);

    return (
        <CardGroup itemsPerRow={gameData.cardsPerRow}>
            {gameData.players.map((playerData, key) => {
                return (
                    <PlayerCardComponent
                        key={key}
                        playerData={playerData}
                        pointLimit={gameData.maxPoints}
                    />
                )
            })}
        </CardGroup>
    )
};

export default SummaryComponent