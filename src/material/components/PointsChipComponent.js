import React from "react";
import Chip from "@material-ui/core/Chip";
import StarsIcon from '@material-ui/icons/Stars';

export const PointsChipComponent = ({points}) => {
    return (
        <React.Fragment>
            <Chip label={points !== null ? points : <StarsIcon/>}
                  color={points !== null ? "secondary" : "primary"}/>
        </React.Fragment>
    );
};