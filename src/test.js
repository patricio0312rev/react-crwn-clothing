import { firebase } from 'firebase/compat/app';
import 'frebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('u8jXhrER4O2bvhdRiKfC').collection('cartItems').doc('IyHwdpOV0fOwRpVReJGp');
firestore.doc('/users/u8jXhrER4O2bvhdRiKfC/cartItems/IyHwdpOV0fOwRpVReJGp');
firestore.collection('/users/u8jXhrER4O2bvhdRiKfC/cartItems');