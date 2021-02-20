import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    box: {
        margin: "1rem 0 1rem 0",
        position: 'relative',
    },
    text: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

    },
}));

export const CircularProgressComponent = ({percent, color, points}) => {

    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <CircularProgress
                color={color}
                variant="determinate"
                value={percent}
                size={'10rem'}
            />
            <div className={classes.text}>
                <Typography variant="h3">
                    {points}
                </Typography>
                <Typography variant={"overline"}>
                    Points
                </Typography>
            </div>

        </Box>
    );
}

CircularProgressComponent.propTypes = {
    percent: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    color: PropTypes.string
}