import React from "react";
//import "@styles/Location.css";
import portal from '@/assets/portal.png'

const Location = ({ location }) => {
  return (
    <article className="location--card">
      <div className="location--information">
        <p className="location--name">{location.name}</p>
        <div className="line"></div>
        <div className="location-detail--information">
          <p className="location--type">{location.type}</p>
          <p className="location--dimension">{location.dimension}</p>
          <img src={portal} alt='portal' className="location--portal" />
        </div>
      </div>
    </article>
  );
};

export {Location};
