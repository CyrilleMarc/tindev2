import React from "react";
import ListUsers from "./ListUsers";
import ListRecruteurs from "./ListRecruteurs";
import "../assets/styles/userList.css";

function HomePage() {
  return (
    <>
      <div className="liste">
        <ListUsers />
        <ListRecruteurs />
      </div>
    </>
  );
}

export default HomePage;
