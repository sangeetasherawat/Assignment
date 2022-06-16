import {combineReducers} from 'redux';
import IAppState from './common/state';
import { getGifListReducer } from './home/reducer';

 
export const combinedReducers = combineReducers<IAppState>({
    gifListState:getGifListReducer
});