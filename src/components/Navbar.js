import React, { useState } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <input
        type="submit"
        value={!isLoggedIn ? "Login" : "Sign out"}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      />
      <NavbarItems isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Navbar;
