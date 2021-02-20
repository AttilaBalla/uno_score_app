import React, {useEffect, useState, useRef} from "react";
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
import {Typography} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

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
    const isModalOpen = useSelector(state => state.userInterface.isModalOpen);

    const [isFormPristine, setIsFormPristine] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    const [selected, setSelected] = useState(null);
    const [formState, setFormState] = useState({});
    
    const firstInputRef = useRef(null);

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
            type: actions.ui.CLOSE_MODAL
        });
    };

    const updateSettingsAndResults = () => {
        if (isFormValid) {
            dispatch({
                type: actions.player.UPDATE_RESULTS,
                data: {
                    roundResults: formState
                }
            });
        }

        closeModal();
    }

    useEffect(() => {
        console.log("useEffect runs");
        if (Object.keys(formState).length === gameData.players.length - 1 && selected !== null) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [formState, gameData, selected]);
    
    useEffect(() => {
        if(isModalOpen) {
            firstInputRef.current.focus();
        }
    },[isModalOpen]);

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
                                inputRef={key === 0 ? firstInputRef : null}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                disabled={playerData.id === selected}
                                onBlur={(event) => {
                                    handleFormStateChange(playerData.id, event.target.value)
                                }}
                            />
                            <Tooltip title={<Typography variant={"body2"}>Mark as winner</Typography>}>
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
                            </Tooltip>
                        </Grid>
                    );
                })}
            </Grid>
            <DialogActions>
                {isFormValid ? <CheckCircleIcon color={"primary"}/> : <CancelIcon/>}
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