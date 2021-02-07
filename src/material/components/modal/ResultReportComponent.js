import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {actions} from "store/actions";

const useStyles = makeStyles(() => ({
    gridItem: {
        display: "flex",
        alignItems: "center"
    },
    winnerSelectButton: {
        margin: ".6rem"
    }
}));

export const ResultReportComponent = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const gameData = useSelector(state => state.gameData);

    const [isFormPristine, setIsFormPristine] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    const [selected, setSelected] = useState(null);
    const [formState, setFormState] = useState({});

    const handleWinnerSelect = (playerId) => {
        setSelected((playerId === selected) ? null : playerId);
    };

    const handleFormStateChange = (playerId, points) => {

        if (isFormPristine) {
            setIsFormPristine(false);
        }
        
        if (points !== "") {
            setFormState({
                ...formState,
                [playerId]: points
            });
        } else {
            delete formState[playerId]
            setFormState({...formState});
        }
    };
    
    const closeModal = () => {
        dispatch({
            type: actions.CLOSE_MODAL
        });
    };
    
    const updateSettingsAndResults = () => {
        if (isFormValid) {
            dispatch({
                type: actions.UPDATE_POINTS,
                data: {
                    roundResults: formState
                }
            });
        }
        
        closeModal();
    }
    
    useEffect(() => {
        if (Object.keys(formState).length === gameData.players.length - 1 && selected !== null) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [formState, selected])

    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={5}
            >
                {gameData.players.map((playerData, key) => {
                    return (
                        <Grid key={key} item xs={6} classes={{root: classes.gridItem}}>
                            <TextField
                                type="number"
                                variant="filled"
                                label={playerData.name}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                disabled={playerData.id === selected}
                                onBlur={(event) => {
                                    handleFormStateChange(playerData.id, event.target.value)
                                }}
                            />
                            <ToggleButton
                                className={classes.winnerSelectButton}
                                value="check"
                                selected={selected === playerData.id}
                                disabled={selected !== playerData.id && selected !== null}
                                onChange={() => {
                                    handleWinnerSelect(playerData.id);
                                }}
                            >
                                <StarsIcon/>
                            </ToggleButton>
                        </Grid>
                    );
                })}
            </Grid>
            <DialogActions>
                { isFormValid ? <CheckCircleIcon color={"primary"}/> : <CancelIcon/>}
                <Button onClick={closeModal}>
                    Cancel
                </Button>
                <Button onClick={updateSettingsAndResults} disabled={!isFormValid} color="primary">
                    Save and close
                </Button>
            </DialogActions>
        </React.Fragment>
    );
};