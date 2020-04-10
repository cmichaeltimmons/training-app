import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ScenarioSelector from "./ScenarioSelector";
import CashRanges from "./CashRanges";
import HeadsUp from "./HeadsUP/HeadsUp";
import HandMatrix from "./Components/HandMatrix";
import RangeBuilder from "./RangeBuilder";

export default function App({ match }) {
  const { path } = match;
  return (
    <Router>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/cash" className="nav-link">
              Flop Texture
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/heads-up`} className="nav-link">
              Heads Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/range-builder`} className="nav-link">
              Range Builder
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/cash">cash</Route>
          <Route path="/heads-up">Heads-up</Route>
          <Route path="/range-builder">
            <RangeBuilder />
          </Route>
          <Route path="/range-builder">Range-Builder</Route>
        </Switch>
      </div>
    </Router>
  );
}
