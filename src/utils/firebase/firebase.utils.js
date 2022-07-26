import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUIxGGK8BCFUFboPe-Y62bxAx9KJz1P7s',
  authDomain: 'crwn-clothing-db-d1e3e.firebaseapp.com',
  projectId: 'crwn-clothing-db-d1e3e',
  storageBucket: 'crwn-clothing-db-d1e3e.appspot.com',
  messagingSenderId: '54698253140',
  appId: '1:54698253140:web:856dc0cf54a55d47f106c1',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
