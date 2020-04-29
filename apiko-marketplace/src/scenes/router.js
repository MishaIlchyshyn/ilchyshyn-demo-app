import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Auth from "./Auth/Auth";

export const routes = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Auth />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
