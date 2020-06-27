import React from "react";
import { Route } from "react-router-dom";
import MealList from "./containers/MealList";
import Login from "./containers/Login";
import RegistrationForm from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={MealList}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/signup" component={RegistrationForm}></Route>
  </div>
);

export default BaseRouter;
