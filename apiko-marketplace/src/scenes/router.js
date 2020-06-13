import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import SavedProductsContainer from "./SavedProducts/SavedProductsContainer";
import LoginFormContainer from "../components/LoginForm/LoginFormContainer";
import RegisterFormContainer from "../components/RegisterForm/RegisterFormContainer";
import DetailProductsContainer from "./DetailProducts/DetailProductsContainer";
import AddProductContainer from "./AddProduct/AddProductContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import EditProfileContainer from "./EditProfile/EditProfileContainer";

export const routes = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  products: "/products",
  users: "/users",
  saved: "/products/saved",
  productsDetail: "/products/:id",
  profile: "/users/:id",
  sell: "/products",
  editProfile: "/edit-profile",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.login} component={LoginFormContainer} />
        <Route path={routes.register} component={RegisterFormContainer} />
        <Route exact path={routes.saved} component={SavedProductsContainer} />
        <Route
          path={routes.productsDetail}
          component={DetailProductsContainer}
        />
        <Route path={routes.profile} component={ProfileContainer} />
        <Route path={routes.sell} component={AddProductContainer} />
        <Route path={routes.editProfile} component={EditProfileContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
