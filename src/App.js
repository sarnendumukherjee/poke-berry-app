import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./App.css";
import Berries from "./Pages/Berries";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BerryDetails from "./Pages/BerryDetails";
import BerryFirmness from "./Pages/BerryFirmness";

function App() {

  return (
    <div data-testid="App">
      <Router>
        <Header />

        <Container maxWidth="md" className="appContainer">
          <Switch>
            <Route exact path="/">
              <Berries />
            </Route>
            <Route path="/berry/:name">
              <BerryDetails />
            </Route>
            <Route path="/berry-firmness/:name">
              <BerryFirmness />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
