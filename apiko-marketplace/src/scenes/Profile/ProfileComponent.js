import React from "react";

import s from "./Profile.module.scss";
import Header from "../../components/Header/Header";
import ProfileUser from "../../components/ProfileUser/ProfileUser";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { routes } from "../router";
import SwitchSaveComponent from "../../components/SwitchSave/SwitchSaveComponent";

const ProfileComponent = ({
  state,
  usersProducts,
  user,
  saveProduct,
  unsaveProduct,
}) => {
  console.log(state);
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  console.log(usersProducts);
  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}>
        <div style={{ color: "red", position: "absolute" }}>Filter</div>
      </Header>

      <div className={s.profilePage}>
        <div className={s.user}>
          {user ? (
            <ProfileUser
              avatar={user.avatar}
              fullName={user.fullName}
              location={user.location}
            />
          ) : (
            "Loading..."
          )}
        </div>

        <div className={s.counter}>
          {usersProducts.count}
          <span className={s.text}>Active listings</span>
        </div>

        <div className={s.profileListProducts}>
          <div className={s.listProducts}>
            {usersProducts.list
              ? usersProducts.list.map((item) => {
                  return (
                    <div key={item.id}>
                      <SwitchSaveComponent
                        saved={item.saved}
                        id={item.id}
                        saveProduct={saveProduct}
                        unsaveProduct={unsaveProduct}
                      />
                      <Link
                        key={item.id}
                        to={`${routes.products}/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ProductCard
                          id={item.id}
                          price={item.price}
                          photos={item.photos}
                          title={item.title}
                        />
                      </Link>
                    </div>
                  );
                })
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
