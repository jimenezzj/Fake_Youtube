const initialState = {
    searchVal: ""
};
const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_VIDEO":
            return {
                ...state,
                searchVal: action.searchVal
            }

        default:
            return state;
    }
};
export default videosReducer;