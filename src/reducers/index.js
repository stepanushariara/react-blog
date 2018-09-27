import {combineReducers} from 'redux';
import ReducerPosts from './reducerPosts';

const rootReducer = combineReducers({
    posts: ReducerPosts
});

export default rootReducer;
