import {actions} from "store/actions";

const initialState = {
    isModalOpen: false
};

export const userInterfaceReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case actions.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            };
        case actions.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            };
            
        default: return state
    }
};