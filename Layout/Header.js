import React from "react";

const Header = () => {
  const showHeader = true;
  return (
    showHeader !== 0 && (
      <header>
        <b>Tic Tac Toe App game: {String(showHeader)}</b>
      </header>
    )
  );
};

export default Header;
