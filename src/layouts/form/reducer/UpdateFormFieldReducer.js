const INITIAL_STATE = {
    index: null, 
}

const UpdateFormFieldReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case "change":
            return {
                ...state,
                index: action.index
            };
        default:
            break;
    }
    return state;
}
export default UpdateFormFieldReducer;