import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {quantity} = useSelector((store) => store.card)
console.log(quantity)

  return (
    <nav>
      <div className="navbar">
        <div>
          <h3>Course App</h3>
        </div>
        <div className="navDiv">
          <p className="count">{quantity}</p>
          <SlBasket className="itemIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
