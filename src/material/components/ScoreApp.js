import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {Box, Typography} from "@material-ui/core";
import {actions} from "store/actions";
import {DataModalComponent} from "material/components/modal/DataModalComponent";
import {PlayerCardComponent} from "material/components/PlayerCardComponent";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(() => ({
    root: {
        padding: "2.5rem"
    },
    fabBox: {
        position: "fixed",
        bottom: "3rem",
        right: "3rem"
    },
    fabButton: {
        margin: ".7rem"
    }
}));

export const ScoreApp = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const gameData = useSelector(state => state.gameData);
    const [counter, setCounter] = useState(gameData.players.length);

    const addPlayer = () => {
        dispatch({
            type: actions.player.ADD_PLAYER,
            data: {"id": counter, "name": "New Player", "points": []}
        });
        setCounter(counter + 1);
    };

    const openModal = () => {
        dispatch({
            type: actions.ui.OPEN_MODAL
        });
    };

    return (
        <React.Fragment>
            <Grid
                container
                classes={{root: classes.root}} // extend internal class based CSS rules
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                {gameData.players.map((playerData, key) => {
                    return (
                        <PlayerCardComponent key={key} playerData={playerData}/>
                    );
                })}
            </Grid>
            <Box className={classes.fabBox}>
                <Tooltip title={<Typography variant={"body2"}>Add new player</Typography>} aria-label="add player">
                    <Fab color="secondary"
                         aria-label="add"
                         classes={{root: classes.fabButton}}
                         onClick={addPlayer}
                    >

                        <AddIcon/>
                    </Fab>
                </Tooltip>
                <Tooltip title={<Typography variant={"body2"}>Edit results and settings</Typography>}
                         aria-label="edit data">
                    <span>
                    <Fab color="primary"
                         aria-label="edit"
                         classes={{root: classes.fabButton}}
                         disabled={gameData.players.length < 2}
                         onClick={openModal}
                    >
                        <EditIcon/>
                    </Fab>
                    </span>
                </Tooltip>
            </Box>
            <DataModalComponent/>
        </React.Fragment>
    )
};
