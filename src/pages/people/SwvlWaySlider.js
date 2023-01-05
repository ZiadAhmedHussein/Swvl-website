import classes from "./SwvlWaySlider.module.css";

const SwvlWaySlider = (props) => {
  return (
    <div className={classes["swvl-way-slider"]}>
      <div className={classes["counter-content"]}>
        <i class="fa-solid fa-arrow-trend-up"></i>
        <p>{props.counter}</p>
      </div>
      <h2>{props.desc}</h2>
    </div>
  );
};

export default SwvlWaySlider;