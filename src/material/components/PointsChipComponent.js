import React from "react";
import Chip from "@material-ui/core/Chip";
import StarsIcon from '@material-ui/icons/Stars';

export const PointsChipComponent = ({points}) => {
    return (
        <React.Fragment>
            {points !== null ? <Chip label={points}/> : <Chip color={"primary"} label={<StarsIcon/>}/>}
        </React.Fragment>
    );
};