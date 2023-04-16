import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {  decreaseItem, increaseItem, removeItem } from "../control/cardSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="cardItem">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4>{price}TL</h4>
        <div>
          <button onClick={() => dispatch(increaseItem(id))}>
            <FaChevronUp />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(decreaseItem(id))}>
            <FaChevronDown />
          </button>
        </div>
        <button className="deleteBtn" onClick={() => dispatch(removeItem(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
