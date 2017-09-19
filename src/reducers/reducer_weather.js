import {FETCH_WEATHER} from '../actions/index'
export default function(state=[],action){
    console.log('Action received',action)
    switch(action.type){
        case FETCH_WEATHER:{
        // return state.concat(push(action.payload.data));
        console.log('Action received',action.payload.data)
        return[action.payload.data,...state];
        }
    }
    return state;
}