import React, {useContext, useState} from "react";
import {Button, Divider, Header, Icon, Input, Segment} from "semantic-ui-react";
import {gameDataStore} from "../store/GameManager";
import {validateIntegerInput, validateNameInput} from "../utilities/validation";
import {actions} from "../store/actions";
import {messages} from "../utilities/messages";
import {MessageComponent} from "./MessageComponent";

const SettingsComponent = () => {

    const gameData = useContext(gameDataStore);
    const {dispatch} = gameData;

    const {maxPoints, cardsPerRow} = gameData.state;
    const [currentMaxPoints, setCurrentMaxPoints] = useState(maxPoints);
    const [currentCardsPerRow, setCurrentCardsPerRow] = useState(cardsPerRow);
    const [alertMessage, setAlertMessage] = useState({type: "", text: ""});

    const updateSettingsAction = () => {
        if (validateIntegerInput(currentMaxPoints) && validateIntegerInput(currentCardsPerRow)) {
            dispatch({
                type: actions.UPDATE_SETTINGS,
                data: {
                    cardsPerRow: parseInt(currentCardsPerRow),
                    maxPoints: parseInt(currentMaxPoints)
                }
            });
            setAlertMessage(messages.changesSuccess)
        } else {
            setAlertMessage(messages.numberValidationError)
        }

        setTimeout(() => {
            setAlertMessage({type: "", text: ""})
        }, 3000)
    };

    const clearPointsAction = () => {
        dispatch({
            type: actions.CLEAR_POINTS
        })
    };

    const clearDataAction = () => {
        dispatch({
            type: actions.CLEAR_DATA
        })
    };

    return (
        <React.Fragment>
            <Header as='h4' attached='top' block>
                Settings
            </Header>
            <MessageComponent type={alertMessage.type} text={alertMessage.text}/>
            <Segment attached>
                <p>Affects how long the games last.</p>
                <div className="limited-width">
                    <Input
                        fluid
                        type={"text"}
                        label={"Max Points"}
                        value={currentMaxPoints}
                        onChange={(event) => {
                            setCurrentMaxPoints(event.target.value)
                        }}>
                    </Input>
                </div>
                <Divider/>
                <p>Controls how many cards should be shown in a single row on the summary page.</p>
                <div className="limited-width">
                    <Input
                        fluid
                        type={"text"}
                        label={"Cards Per Row"}
                        value={currentCardsPerRow}
                        onChange={(event) => {
                            setCurrentCardsPerRow(event.target.value)
                        }}>
                    </Input>
                </div>
                <Divider/>
                <Button icon
                        color={"blue"}
                        labelPosition={"left"}
                        onClick={updateSettingsAction}>
                    <Icon name="check"/>
                    Apply Changes
                </Button>
            </Segment>
            <Segment raised color={"orange"}>
                <p>Clears points for all players. This cannot be undone!</p>
                <Button icon color="orange" labelPosition='left' onClick={clearPointsAction}>
                    <Icon name='trash'/>
                    Clear points
                </Button>
            </Segment>
            <Segment raised color={"red"}>
                <p>Clears all data from the current session. This cannot be undone!</p>
                <Button icon color="red" labelPosition='left' onClick={clearDataAction}>
                    <Icon name='trash'/>
                    Clear all data
                </Button>
            </Segment>
        </React.Fragment>
    )
};

export default SettingsComponent