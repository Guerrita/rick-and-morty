import React from "react";
//import "@/styles/ItemList.css";


const ItemList = ({ children }) => {
  return (
    <section className="main-container">
      <div className="ProductList">
        {children}
      </div>
    </section>
  );
};

export default ItemList;