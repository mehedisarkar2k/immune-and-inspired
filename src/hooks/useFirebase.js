import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUserWithEmail = (e) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .then(() => setMessage("You have successfully logged out."));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    message,
    googleSignIn,
    createUserWithEmail,
    signOutUser,
    setEmail,
    setPassword,
  };
};

export default useFirebase;
