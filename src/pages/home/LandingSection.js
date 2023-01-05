
import classes from "./landingSection.module.css";
import Button from "../../components/UI/Button";

const LandingSection = () => {
  return (
    <div className={classes["landing"]}>
      <div className={classes.video}>
        <video
          src={require("../../VIDEOS/سويڤل منطقي(1080P_HD).mp4")} 
          muted 
          loop 
          autoPlay
          poster={require("../../IMGES/landing-poster.jpg")}
        />
      </div>
      <Button type="button">
        <a href="https://apps.apple.com/app/id1214486024?mt=8" rel="noreferrer" target="_blank">download</a>
      </Button>
    </div>
    
  );
};

export default LandingSection;