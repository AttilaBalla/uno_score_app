import React, {useState} from 'react';
import {Button, Grid, Icon, Input, Segment, Statistic} from "semantic-ui-react";
import {validateIntegerInput} from "../utilities/validation";
import {actions} from "../store/actions";
import {PointsComponent} from "./PointsComponent";
import {useDispatch} from "react-redux";


const PlayerTableComponent = ({playerData}) => {

    const dispatch = useDispatch();

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

    const removePlayer = () => {
        dispatch({
            type: actions.REMOVE_PLAYER,
            data: {id: playerData.id}
        });
    };

    return (
        <Grid celled stackable>
            <Grid.Row>
                <Grid.Column width={3}>
                    <h2>{playerData.name}</h2>
                    <Statistic>
                        <Statistic.Value>{playerData.points.reduce((a, b) => a + b, 0)}</Statistic.Value>
                        <Statistic.Label>Points</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment basic>
                                    {playerData.points.length === 0 ?
                                        <span>points will be shown here...</span> : null}
                                    {playerData.points.map((value, key) => {
                                        return (
                                            <PointsComponent key={key} index={key + 1} value={value}/>
                                        )
                                    })}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={14}>
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
                            <Grid.Column width={1}>
                                <Button icon onClick={removePlayer}>
                                    <Icon name={"edit"}/>
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Button icon onClick={removePlayer}>
                                    <Icon name={"trash"}/>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default PlayerTableComponent
