import React, {useContext, useState} from "react";
import {Button, Header, Icon, Input, Label, Segment} from "semantic-ui-react";
import {gameDataStore} from "../store/GameManager";
import {validateIntegerInput} from "../utilities/validation";
import {actions} from "../store/actions";

const ConfigurationComponent = () => {

    const gameData = useContext(gameDataStore);
    const {dispatch} = gameData;

    const {maxPoints, cardsPerRow} = gameData.state;
    const [currentMaxPoints, setCurrentMaxPoints] = useState(maxPoints);
    const [currentCardsPerRow, setCurrentCardsPerRow] = useState(cardsPerRow);

    const updateMaxPoints = () => {
        if (validateIntegerInput(currentMaxPoints)) {
            dispatch({
                type: actions.UPDATE_MAX_POINTS,
                data: {
                    maxPoints: parseInt(currentMaxPoints)
                }
            });
            // do alerts here later....
        }
    };

    const updateCardsPerRow = () => {
        if (validateIntegerInput(currentMaxPoints)) {
            dispatch({
                type: actions.UPDATE_CARDS_PER_ROW,
                data: {
                    cardsPerRow: parseInt(currentCardsPerRow)
                }
            });
            // do alerts here later....
        }
    };

    return (
        <React.Fragment>
            <Header as='h4' attached='top' block>
                Game Options
            </Header>
            <Segment attached>
                <p>Affects how long the games last.</p>
                <Input type={"text"}
                       labelPosition={"right"}
                       value={currentMaxPoints}
                       action
                       onChange={(event) => {
                           setCurrentMaxPoints(event.target.value)
                       }}>
                    <Label>Point Limit</Label>
                    <input/>
                    <Button icon color={"green"} onClick={updateMaxPoints}>
                        <Icon name="check"/>
                    </Button>
                </Input>
            </Segment>
            <Header as='h4' attached='top' block>
                Interface Options
            </Header>
            <Segment attached>
                <p>Controls how many cards should be shown in a single row on the summary page.</p>
                <Input type={"text"}
                       labelPosition={"right"}
                       value={currentCardsPerRow}
                       action
                       onChange={(event) => {
                           setCurrentCardsPerRow(event.target.value)
                       }}>
                    <Label>Cards per row</Label>
                    <input/>
                    <Button icon color={"green"} onClick={updateCardsPerRow}>
                        <Icon name="check"/>
                    </Button>
                </Input>
            </Segment>
            <Segment raised color={"red"}>
                <p>Clears all data from the current session. This cannot be undone!</p>
                <Button icon color="red" labelPosition='left'>
                    <Icon name='trash'/>
                    Clear data
                </Button>
            </Segment>
        </React.Fragment>
    )
};

export default ConfigurationComponent