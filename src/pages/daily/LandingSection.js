import classes from "./LandingSection.module.css";
import Button from "../../components/UI/Button";

const LandingSection = () => {
  return (
    <div className={classes["landing-section"]}>
      <Button type="button">
        <a href="https://apps.apple.com/app/id1214486024?mt=8" rel="noreferrer" target="_blank">download</a>
      </Button>
    </div>
  );
};

export default LandingSection;