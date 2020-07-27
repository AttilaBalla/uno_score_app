import React, {useContext, useState} from "react";
import {Button, Header, Icon, Input, Segment} from "semantic-ui-react";
import PlayerTableComponent from "./PlayerTableComponent";
import {gameDataStore} from "../store/GameManager";
import {actions} from "../store/actions";
import {validateNameInput} from "../utilities/validation";

const PlayerDataComponent = () => {

    const gameData = useContext(gameDataStore);
    const {dispatch} = gameData;

    const [playerName, setPlayerName] = useState("");
    const [counter, setCounter] = useState(gameData.state.players.length);

    const addPlayer = () => {

        if (validateNameInput(playerName)) {
            dispatch({
                type: actions.ADD_PLAYER,
                data: {"id": counter, "name": playerName, "points": []}
            });
            setCounter(counter + 1);
            setPlayerName("");
        }
        // do alert stuff here
    };

    const renderPlaceHolderSegment = () => (
        <Segment placeholder>
            <Header icon>
                <Icon name='user'/>
                No players have been added yet.
            </Header>
        </Segment>
    );

    const renderPlayerComponents = () => {
        return (
            gameData.state.players.map((playerData, key) => {
                return (
                    <PlayerTableComponent key={key} playerData={playerData}/>
                )
            })
        )
    };

    return <React.Fragment>
        <Input
            onChange={(event) => {
                setPlayerName(event.target.value)
            }}
            value={playerName}
            label={<Button icon
                           color={"green"}
                           onClick={addPlayer}>
                <Icon name='add'/>
            </Button>}
            labelPosition='right'
            placeholder='add player...'
        />

        {gameData.state.players.length > 0 ? renderPlayerComponents() : renderPlaceHolderSegment()}

    </React.Fragment>
};

export default PlayerDataComponent;