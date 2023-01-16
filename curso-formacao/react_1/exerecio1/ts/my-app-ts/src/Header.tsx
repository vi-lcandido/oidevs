import React from "react";

const Header = () => {
  return (
    <header>
      <button type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}>
        Home
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/produtos";
        }}
      >
        Produtos
      </button>
    </header>
  );
};

export default Header;
