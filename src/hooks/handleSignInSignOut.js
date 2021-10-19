import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useHandleSignInSignOut = () => {
  const {
    googleSignIn,
    githubSignIn,
    createUserWithEmail,
    setIsLoading,
    name,
  } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const updateUser = () => {
    const user = getAuth().currentUser;
    if (user) {
      user.displayName = name;
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
        history.push(redirect_uri);
      });
  };

  const handleGithubSignIn = () => {
    setIsLoading(true);
    githubSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
        history.push(redirect_uri);
      });
  };

  const handleNewUserWithEmail = (e) => {
    e.preventDefault();
    createUserWithEmail()
      .then((result) => {
        updateUser();
      })
      .finally(() => {
        setIsLoading(false);
        history.push(redirect_uri);
      });
  };

  return { handleGoogleSignIn, handleGithubSignIn, handleNewUserWithEmail };
};

export default useHandleSignInSignOut;
