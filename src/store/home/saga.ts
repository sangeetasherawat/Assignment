import { APP_GET_GIF_LIST_FAILED, APP_GET_GIF_LIST_SUCCEED, GetGifListAction, GET_GIF_LIST, HIDE_LIST_LOADER, SHOW_LIST_LOADER } from "./type";
import { call, put,takeLatest } from 'redux-saga/effects';
import { GifService } from "../api/gifService";

function* getGifListSaga(action: GetGifListAction) {
    try {
        yield put({type: SHOW_LIST_LOADER});
        const payload = yield call(GifService.fetchGifList, { ...action.payload });
        console.log('result for gif list', payload);
        yield put({ type: APP_GET_GIF_LIST_SUCCEED, payload });
    } catch (error) {
        console.log('error for gif list', error);

        yield put({ type: APP_GET_GIF_LIST_FAILED, error });

    }
    yield put({type: HIDE_LIST_LOADER});
}

export function* fetchWatcher() {
	yield takeLatest(GET_GIF_LIST, getGifListSaga)
	
}