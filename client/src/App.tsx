import { useEffect, useState } from 'react';
import './App.css';

import { auth, db } from './firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

// Adds a new user to firebase.
const register = async (email: string, password: string) => {
  try {
    // Register user
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;

    // Add user to database
    const usersRef = collection(db, 'users');
    await setDoc(doc(usersRef, `${user.uid}`), {
      name: 'sus',
      email: user.email,
      partners: [],
    });
  } catch (e) {
    alert(e);
  }
};

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('logged');
  } catch (e) {
    alert(e);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    alert(e);
  }
};

const getUser = async (uId: string) => {
  const document = await getDoc(doc(db, 'users', `${uId}`));
  if (document.exists()) {
    console.log(document.data());
  }
};

const addPartner = async (authUId: string, uId: string) => {
  try {
    const userRef = doc(db, 'users', `${authUId}`);
    await updateDoc(userRef, {
      partners: arrayUnion(`${uId}`), // adds element to an array
    });
  } catch (e) {
    alert(e);
  }
};

function App() {
  const [authUId, setAuthUId] = useState<string | null>(null);

  useEffect(() => {
    // Observer for when auth context changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUId(user.uid);
      } else {
        // User is signed out
        setAuthUId(null);
      }
    });
  }, []);

  console.log(authUId);

  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Sussy Sus</h1>
      <div>
        <button onClick={() => register('sussy@email.com', 'thisissus')}>
          Register
        </button>
      </div>
      <div>
        <button onClick={() => login('sussy@email.com', 'thisissus')}>
          Login
        </button>
        <div>
          <button onClick={logout}>Log out</button>
        </div>
        <div>
          <button onClick={() => getUser(authUId as string)}>
            Get User Stuff
          </button>
        </div>
        <div>
          <button onClick={() => addPartner(authUId as string, 'your dad')}>
            Add partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
