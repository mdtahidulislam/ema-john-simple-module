import { useEffect, useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth';

const useFirebase = () => {
    // create state
    const [user, setUser] = useState({});

    // cretae firebae auth and provider
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // hnadler for google sing in
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
        })
    }

    // firebase observer hook for state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
    }, [])

    // create logout handler
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    // return 
    return {
        user,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;