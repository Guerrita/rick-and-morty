import React from "react";
import portal from "@/assets/portal.png";

const NotFound = () => {
  return (
    <section className="not-found-container">
      <img src={portal} alt="portal" />
      <h1 className="not-found-title">
        4<span className="not-found-rick"></span>4
        <br />
        N<span className="not-found-morty"></span>t Fo
        <span className="not-found-summer"></span>nd{" "}
      </h1>
    </section>
  );
};

export default NotFound;
