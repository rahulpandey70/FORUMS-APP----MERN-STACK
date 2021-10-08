import { GLOBALTYPES } from "../actions/globalTypes";

const modalReducer = (state = false, action) => {
    switch (action.type){
        case GLOBALTYPES.MODAL:
            return action.payload;
        default:
            return state;
    }
};

export default modalReducer;