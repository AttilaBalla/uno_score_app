import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {validateIntegerInput} from "utilities/validation";
import {actions} from "store/actions";

export const SettingsComponent = () => {
    
    const maxPoints = useSelector(state => state.gameData.maxPoints);
    const [currentMaxPoints, setCurrentMaxPoints] = useState(maxPoints);
    const dispatch = useDispatch();
    
    const updateMaxPoints = () => {
        
        if(validateIntegerInput(currentMaxPoints)) 
            dispatch({
                type: actions.settings.UPDATE_MAX_POINTS,
                data: currentMaxPoints
            })
    };
    
    return(
        <TextField
            type="number"
            variant="filled"
            label={"Target Score"}
            InputLabelProps={{
                shrink: true,
            }}
            value={currentMaxPoints}
            onChange={(event) => {
                setCurrentMaxPoints(event.target.value)
            }}
            onBlur={updateMaxPoints}
        />
    )
}