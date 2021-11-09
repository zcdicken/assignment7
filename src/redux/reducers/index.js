const initState = {
    title:"Today"
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'changeTitle') {
        return {
            ...state,
            title: action.title
        }
    }

    return state;
}

export default rootReducer;