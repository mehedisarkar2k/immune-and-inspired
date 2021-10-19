import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useHandleSignInSignOut = () => {
  const { googleSignIn, githubSignIn, createUserWithEmail, setIsLoading } =
    useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

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
    console.log("Clicked");
    createUserWithEmail().then((result) => {
      console.log(result.user);
      history.push("/login");
    });
  };

  return { handleGoogleSignIn, handleGithubSignIn, handleNewUserWithEmail };
};

export default useHandleSignInSignOut;
