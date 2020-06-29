import React from "react";

import s from "./Profile.module.scss";
import Header from "../../components/Header/Header";
import ProfileUser from "../../components/ProfileUser/ProfileUser";
import SearchComponent from "../../components/Search/SearchComponent";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import Footer from "../../components/Footer/Footer";

const ProfileComponent = ({
  state,
  usersProducts,
  user,
  saveProduct,
  unsaveProduct,
  productsSearch,
  isLoadingUser,
  isLoadingProducts,
}) => {
  console.log(state);
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  console.log(state);
  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      <div className={s.profilePage}>
        {isLoadingUser ? (
          <div>Loading...</div>
        ) : (
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
        )}

        {isLoadingProducts ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className={s.counter}>
              {usersProducts.count}
              <span className={s.text}>Active listings</span>
            </div>

            <div className={s.profileListProducts}>
              <div className={s.listProducts}>
                {usersProducts.list
                  ? usersProducts.list.map((item) => {
                      return (
                        <ItemProduct
                          saved={item.saved}
                          key={item.id}
                          id={item.id}
                          saveProduct={saveProduct}
                          unsaveProduct={unsaveProduct}
                          price={item.price}
                          photos={item.photos}
                          title={item.title}
                        />
                      );
                    })
                  : "Loading..."}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProfileComponent;
