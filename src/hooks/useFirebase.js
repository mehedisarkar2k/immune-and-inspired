import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const emailPassSignIn = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = () => {
    setIsLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .then(() => setIsLoading(false))
      .then(() => setMessage("You have successfully logged out."));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    message,
    isLoading,
    name,
    googleSignIn,
    githubSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setMessage,
    setName,
    signOutUser,
    setEmail,
    setPassword,
    setIsLoading,
  };
};

export default useFirebase;
