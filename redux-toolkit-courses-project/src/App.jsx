import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CourseList from "./component/CourseList";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { calculateTotal } from "./control/cardSlice";

function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cardItems])

  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
