import classes from "./SwvlWaySlider.module.css";

const SwvlWaySlider = (props) => {
  return (
    <div className={classes["swvl-way-slider"]}>
      <div className={classes["counter-content"]}>
        <div className={classes["arrow-img"]}>
          <img src={require("../../IMGES/daily_imges/arrow.jpg")} alt="img" />
        </div>
        <p>{props.counter}</p>
      </div>
      <h2>{props.desc}</h2>
    </div>
  );
};

export default SwvlWaySlider;