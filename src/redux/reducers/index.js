const initState = {
    title:"Today",
    subTitle:"Today is Today",
    text:"Today is Tomorrow is Yesterday is Never The End is"
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'changeTitle') {
        return {
            ...state,
            title: action.title
        }
    }

    if(action.type === 'changeSubTitle') {
        return {
            ...state,
            subTitle: action.subTitle
        }
    }

    if(action.type === 'changeText') {
        return {
            ...state,
            text: action.text
        }
    }

    return state;
}

export default rootReducer;