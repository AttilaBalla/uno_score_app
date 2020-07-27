import React, {useContext} from 'react';
import PlayerCardComponent from "./PlayerCardComponent";
import {CardGroup} from "semantic-ui-react";
import {gameDataStore} from "../store/GameManager";

const SummaryComponent = () => {

    const gameData = useContext(gameDataStore);

    return (
        <CardGroup itemsPerRow={gameData.state.cardsPerRow}>
            {gameData.state.players.map((playerData, key) => {
                return (
                    <PlayerCardComponent
                        key={key}
                        playerData={playerData}
                        pointLimit={gameData.state.maxPoints}
                    />
                )
            })}
        </CardGroup>
    )
};

export default SummaryComponent