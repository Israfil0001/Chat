import React from "react";
import CardList from "../CardList/MessageCard/MessageCard";
import LeftCard from "../CardList/CardList";
import Search from "../Search/Search";
import TopBar from "../TopBar/TopBar";
import Message from "../Message/Message";

function Home() {
  return (
    <div className="row my-5 height-to-the-bottom">
      <div className="col-4">
        <div className="d-flex flex-column">
          <input type="text" className="search" />
        </div>
        <div className="d-flex flex-column mt-4 message-list">
          <div className="d-flex message-card">
            <div className="profile-pic"></div>
            <div className="d-flex flex-column">
              <span>Алина отдел кадров</span>
              <span className="fs-14 text-secondary">Принеси документы</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8 ">
        <div className="h-100 d-flex flex-column justify-content-between gap-3">
          <div className="message-list ">
            <div className="d-flex">
              <div className="profile-pic"></div>
              <span>Алина отдел кадров</span>
            </div>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
