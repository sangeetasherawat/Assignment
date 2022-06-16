import {all, fork, select} from 'redux-saga/effects';
import { fetchWatcher } from './home/saga';


const rootSaga = function*() {
	yield all([
		fork(fetchWatcher),
		
	]);
};

export default rootSaga;
