import React from "react";
import Home from "../home/Home";
import "./style.css";
function TopBar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-bar-v2">
          <div className="nav-bar-left-items">
            <span>Чаты</span>
            <span>Личные Сообщения</span>         
      </div>
      </div>
          <span>Войти</span>
        </div>
    </div>
  );
}

export default TopBar;
