import React, {useState} from "react";
import {Button, Header, Icon, Input, Segment} from "semantic-ui-react";
import PlayerTableComponent from "./PlayerTableComponent";
import {actions} from "../store/actions";
import {validateNameInput} from "../utilities/validation";
import {useDispatch, useSelector} from "react-redux";

const PlayerDataComponent = () => {

    const gameData = useSelector(state => state);
    const dispatch = useDispatch();

    const [playerName, setPlayerName] = useState("");
    const [counter, setCounter] = useState(gameData.players.length);

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
            gameData.players.map((playerData, key) => {
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

        {gameData.players.length > 0 ? renderPlayerComponents() : renderPlaceHolderSegment()}

    </React.Fragment>
};

export default PlayerDataComponent;