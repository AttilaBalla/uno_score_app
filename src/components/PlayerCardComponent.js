import React from "react";
import {Card, Progress, Statistic} from "semantic-ui-react";
import {convertPercentToColor, round} from "../utilities/progressBarUtils";

const PlayerCardComponent = ({playerData, pointLimit}) => {

    const currentPoints = playerData.points.reduce((a, b) => a + b, 0);
    const currentPercent = (currentPoints / pointLimit) * 100;
    let progressColor = convertPercentToColor(currentPercent);

    return (
        <Card>
            <Card.Content>
                <Card.Header>{playerData.name}</Card.Header>
                <Statistic label='points' value={playerData.points.reduce((a, b) => a + b, 0)}/>
                <Card.Description>
                    <Progress
                        color={progressColor}
                        label={round(currentPercent, 1) + '%'}
                        value={currentPoints}
                        total={pointLimit}
                    />
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default PlayerCardComponent