import classes from "./FirstSection.module.css";

const FirstSection = () => {
  return (
    <div className={`containerr ${classes["first-section"]}`}>
      <div className={classes["text-content"]}>
        <h1>We are the people who move & inspire us.</h1>
        <p>
          We strive to connect the dots in every experience, 
          inspire the environment we work in & empower the culture we believe in, everyday.
        </p>
      </div>
      <div className={classes["img-content"]}>
        <img src={require("../../IMGES/human-travel.jpg")} alt="img" />
      </div>
    </div>
  );
};

export default FirstSection;