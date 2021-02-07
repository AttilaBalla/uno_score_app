import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {Box} from "@material-ui/core";
import {actions} from "store/actions";
import {DataModalComponent} from "material/components/modal/DataModalComponent";
import {PlayerCardComponent} from "material/components/PlayerCardComponent";

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
            type: actions.ADD_PLAYER,
            data: {"id": counter, "name": "New Player", "points": []}
        });
        setCounter(counter + 1);
    };
    
    const openModal = () => {
        dispatch({
            type: actions.OPEN_MODAL
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
                <Fab color="primary"
                     aria-label="add"
                     classes={{root: classes.fabButton}}
                     onClick={addPlayer}
                >
                    <AddIcon/>
                </Fab>
                <Fab color="secondary"
                     aria-label="edit"
                     classes={{root: classes.fabButton}}
                     disabled={!gameData.players.length}
                     onClick={openModal}
                >
                    <EditIcon/>
                </Fab>
            </Box>
            <DataModalComponent/>
        </React.Fragment>
    )
};
