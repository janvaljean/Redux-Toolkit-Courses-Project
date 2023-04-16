import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCard } from "../control/cardSlice";

const CourseList = () => {
    const dispatch = useDispatch()
  const { quantity, cardItems, total } = useSelector((store) => store.card);

  return (
    <div>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>Your Shopping Box</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>Your Shopping Box</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Total Payment <span>{total}€</span>
              </h4>
            </div>
            <button className="deleteBtn" onClick={()=>dispatch(clearCard())}>Delete</button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default CourseList;
