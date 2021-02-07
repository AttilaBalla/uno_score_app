import React from 'react';
import {Icon, Modal} from "semantic-ui-react";

const PointsTileComponent = ({index, value}) => {

    return (
        <div className={(value === 0) ? "points-item zero" : "points-item"}>
            <div>{index}.</div>
            <b>{(value === 0) ? <Icon name="gem"/> : value}</b>
        </div>
    )

};
export const PointsComponent = ({index, value}) => {
    return (
        <Modal
            trigger={<PointsTileComponent index={index} value={value}/>}
            header='Reminder!'
            content='Call Benjamin regarding the reports.'
            actions={['Snooze', {key: 'done', content: 'Done', positive: true}]}
        />
    )
};