import React from 'react';
import {Icon} from "semantic-ui-react";

export const PointsComponent = ({index, value}) => {

    return (
        <div className={(value === 0) ? "points-item zero" : "points-item"}>
            <div>{index}.</div>
            <b>{(value === 0) ? <Icon name="gem"/> : value}</b>
        </div>
    )

};