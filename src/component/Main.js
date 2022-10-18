//import { Link } from "react-router-dom";
//import foodThumb from "../img-mockup/nasi-goreng-70674_1280.jpg";
import Featured from "./Featured";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="card">
        <h2>What to Eat?</h2>
        <p>Discover foods to cook and eat!</p>
        <a href="#featured"><button>v</button></a>
      </div>
      <Featured />
    </>
  );
};

export default Main;
