import {actions} from "store/actions";

const initialState = {
    isModalOpen: false
};

export const userInterfaceReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case actions.ui.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            };
        case actions.ui.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            };
            
        default: return state
    }
};