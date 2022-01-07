import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

/* Redux Thunk just focuses on functions, just as this funct below */
export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        /* # Promise pattern
        fetch('https://firestore.googleapis.com/v1/projects/react-crwn-db-5d2e0/databases/(default)/documents/collections')
        .then((response) => response.json())
        .then((collections) => console.log(collections)); 
        */

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));

            this.setState({ loading: false });
        }).catch((error) => dispatch(fetchCollectionsFailure(error)));
    }
}