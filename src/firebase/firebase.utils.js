import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCacgQho3Dz5JvX_o_WGGCD4Pu_C9lVebc',
  authDomain: 'crwn-db-4f0ee.firebaseapp.com',
  databaseURL: 'https://crwn-db-4f0ee.firebaseio.com',
  projectId: 'crwn-db-4f0ee',
  storageBucket: 'crwn-db-4f0ee.appspot.com',
  messagingSenderId: '744047426057',
  appId: '1:744047426057:web:ae74bb1440785a2d28d6d8',
  measurementId: 'G-1721TW63WP'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
export default firebase;
