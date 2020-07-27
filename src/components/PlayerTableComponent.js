import React, {useContext, useState} from 'react';
import {Button, Grid, Icon, Input, Statistic, Table} from "semantic-ui-react";
import {validateIntegerInput} from "../utilities/validation";
import {gameDataStore} from "../store/GameManager";
import {actions} from "../store/actions";


const PlayerTableComponent = ({playerData}) => {

    const gameData = useContext(gameDataStore);
    const {dispatch} = gameData;

    const [currentPoints, setCurrentPoints] = useState("");

    const addPointsToPlayer = () => {

        if (validateIntegerInput(currentPoints)) {
            dispatch({
                type: actions.ADD_POINTS,
                data: {
                    id: playerData.id,
                    points: [...playerData.points, parseInt(currentPoints)]
                }
            });
            setCurrentPoints("")
        }
    };

    return (
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>
                    <h2>{playerData.name}</h2>
                    <Statistic>
                        <Statistic.Value>{playerData.points.reduce((a, b) => a + b, 0)}</Statistic.Value>
                        <Statistic.Label>Points</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Table celled collapsing textAlign="center">
                        <Table.Header>
                            <Table.Row>
                                {playerData.points.map((value, key) => {
                                    return (
                                        <Table.HeaderCell key={key}>{key + 1}</Table.HeaderCell>
                                    )
                                })}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                {playerData.points.map((value, key) => {
                                    return (
                                        <Table.HeaderCell key={key}>{value}</Table.HeaderCell>
                                    )
                                })}
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Input
                        onChange={(event) => {
                            setCurrentPoints(event.target.value)
                        }}
                        value={currentPoints}
                        size={"mini"}
                        placeholder='add points...'
                        labelPosition='right'
                        label={<Button icon
                                       primary
                                       onClick={addPointsToPlayer}>
                            <Icon name='add'/>
                        </Button>}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default PlayerTableComponent
