import { all, takeEvery, call, put } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }

    /* What we had when using thunk
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));

            this.setState({ loading: false });
        }).catch((error) => dispatch(fetchCollectionsFailure(error)));
    */
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart),
    ])
}
