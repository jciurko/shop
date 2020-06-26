import React from "react";
import { Route } from "react-router-dom";
import MealList from "./containers/MealList";
import Login from "./containers/Login";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={MealList}></Route>
    <Route exact path="/login" component={Login}></Route>
  </div>
);

export default BaseRouter;
