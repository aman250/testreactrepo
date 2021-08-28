import React from "react";
import { preLoginNav, postLoginNav } from "./Config";

const NavbarItems = (props) => {
  const PreLoginItems = () => {
    return (
      <>
        {preLoginNav.map((item) => (
          <div>{item.label}</div>
        ))}
      </>
    );
  };

  const PostLoginItems = () => {
    return (
      <>
        {postLoginNav.map((item) => (
          <div>{item.label}</div>
        ))}
      </>
    );
  };

  return (
    <>
      {!props.isLoggedIn ? (
        <>
          <PreLoginItems />
        </>
      ) : (
        <>
          <PostLoginItems />
        </>
      )}
    </>
  );
};

export default NavbarItems;
