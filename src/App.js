import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/LogIn/SignIn/SignIn";
import SignUp from "./components/LogIn/SignUp/SignUp";
import Contact from "./components/Pages/Contact/Contact";
import CoronaInfo from "./components/Pages/CoronaInfo/CoronaInfo";
import Departments from "./components/Pages/Departments/Departments";
import DetailsOfACart from "./components/Pages/DetailsOfACard/DetailsOfACart";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Header from "./components/Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/departments">
              <Departments />
            </Route>

            <Route exact path="/contact-us">
              <Contact />
            </Route>

            <Route exact path="/service/:id">
              <DetailsOfACart />
            </Route>
            {/* <PrivateRoute exact path="/departments">
              <Departments />
            </PrivateRoute>

            <PrivateRoute exact path="/contact-us">
              <Contact />
            </PrivateRoute>

            <PrivateRoute exact path="/service/:id">
              <DetailsOfACart />
            </PrivateRoute> */}

            <Route exact path="/covid-19">
              <CoronaInfo />
            </Route>

            <Route path="/login">
              <SignIn />
            </Route>

            <Route path="/signUp">
              <SignUp />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
