import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div>
    <div className="topbar-container">
      <div className="indices-container mt-3">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
    </div>
  );
};

export default TopBar;
