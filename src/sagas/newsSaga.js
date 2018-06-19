import { put, call } from 'redux-saga/effects';
import { topNews, anyNews } from '../Api/api';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* anyNewsSaga({ payload }) {
  try {
         const news = yield call(anyNews, payload);
        yield [
      put({ type: types.SEARCH_ANY_NEWS_SUCCESS, news }),
     
    ];
  } catch (error) {
    yield put({ type: types.SEARCH_ANY_NEWS_ERROR, error });
  }
}

export function* topNewsSaga({ payload }) {
  try {
         const news = yield call(topNews, payload);
        yield [
      put({ type: types.SEARCH_TOP_NEWS_SUCCESS, news }),
     
    ];
  } catch (error) {
    yield put({ type: types.SEARCH_TOP_NEWS_ERROR, error });
  }
}