import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Services from "./components/Pages/Services/Services";
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

          <Route exact path="/services">
            <Services />
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
