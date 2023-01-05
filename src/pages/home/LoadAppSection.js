import classes from "./LoadAppSection.module.css";
import Button from "../../components/UI/Button";

const LoadAppSection = () => {
  return (
    <div className={`containerr ${classes["load-app-section"]}`}>
      <div className={classes["imge"]}>
        <img src={require("../../IMGES/mobil-app.png")} alt="swvl-umprella"/>
      </div>
      <div className={classes["details"]}>
        <h1>What moves us?</h1>
        <p>
          Just like you, time, money and comfort are what we're all about, 
          so you can always stay on the right track with a hassle-free commuting experience.
        </p>
        <Button type="button">
          <a href="https://apps.apple.com/app/id1214486024?mt=8" rel="noreferrer" target="_blank">download</a>
        </Button>
      </div>
    </div>
  );
};

export default LoadAppSection;  