import defaultState from "./state";

const reducers = (state=defaultState,action)=>{
    let { num } = state;
    switch (action.type){
        case "ADD":
            return {...state,...{num: num+1}};
        case "REDUCE":
            return Object.assign({}, state, {num: num-1});
        default:
            return state;
    }
};

export default reducers;