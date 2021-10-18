import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Departments from "./components/Pages/Departments/Departments";
import DetailsOfACart from "./components/Pages/DetailsOfACard/DetailsOfACart";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Header from "./components/Pages/Shared/Header/Header";

function App() {
  return (
    <div className="h-screen flex flex-col">
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

          <Route exact path="/service/:id">
            <DetailsOfACart />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
