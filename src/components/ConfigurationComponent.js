import React, {useContext} from "react";
import {Button, Header, Icon, Input, Label, Segment} from "semantic-ui-react";
import {gameDataStore} from "../store/GameManager";

const ConfigurationComponent = () => {

    const gameData = useContext(gameDataStore);
    const {dispatch} = gameData;

    const {maxPoints, cardsPerRow} = gameData.state;

    return (
        <React.Fragment>
            <Header as='h4' attached='top' block>
                Game Options
            </Header>
            <Segment attached>
                <p>Affects how long the games last.</p>
                <Input type={"text"} labelPosition={"right"} value={maxPoints} action>
                    <Label>Point Limit</Label>
                    <input/>
                    <Button icon color={"green"}>
                        <Icon name="check"/>
                    </Button>
                </Input>
            </Segment>
            <Header as='h4' attached='top' block>
                Interface Options
            </Header>
            <Segment attached>
                <p>Controls how many cards should be shown in a single row on the summary page.</p>
                <Input type={"text"} labelPosition={"right"} value={cardsPerRow} action>
                    <Label>Cards per row</Label>
                    <input/>
                    <Button icon color={"green"}>
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