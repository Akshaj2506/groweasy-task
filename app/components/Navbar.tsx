import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2">
      <Link className="navbar-brand" href="/">
        GrowEasy
      </Link>
    </nav>
  );
};

export default Navbar;
