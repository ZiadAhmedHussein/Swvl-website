import React from "react";
import classes from "./App.module.css";
import { Route, Switch, Redirect } from "react-router-dom";


import HomePage from "./pages/home/HomePage";
import DailyPage from "./pages/daily/DailyPage";
import TravelPage from "./pages/travel/TravelPage";
import BusinessPage from "./pages/business/BusinessPage";
import CaptainsPage from "./pages/captain/CaptainsPage";
import PeoplePage from "./pages/people/PeoplePage";
import InvestorsPage from "./pages/investors/InvestorsPage";

function App() {
  
  return (
    <div className={classes.App}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/daily">
            <DailyPage />
          </Route>
          <Route path="/travel">
            <TravelPage />
          </Route>
          <Route path="/business">
            <BusinessPage />
          </Route>
          <Route path="/captains">
            <CaptainsPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/investors">
            <InvestorsPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
