import {Card, Progress, Statistic} from "semantic-ui-react";
import React from "react";

const PlayerCardComponent = ({playerData, pointLimit}) => {

    return (
        <Card>
            <Card.Content>
                <Card.Header>{playerData.name}</Card.Header>
                <Statistic label='points' value={playerData.points.reduce((a, b) => a + b, 0)}/>
                <Card.Description>
                    <Progress
                        indicating
                        value={playerData.points.reduce((a, b) => a + b, 0)}
                        total={pointLimit}
                        />
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default PlayerCardComponent