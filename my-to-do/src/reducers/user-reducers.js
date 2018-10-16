export default function (state = [],action){
    switch (action.type){
        case "updateUser" :
            return action.payload.user;
        case "addUser" :
             console.log(state);
             state = state.concat(action.payload);
             return state;
        default :
            return state;
    }
}