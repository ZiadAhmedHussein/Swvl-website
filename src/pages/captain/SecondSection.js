import CaptainVideo from "../../VIDEOS/CaptainVideo";
import classes from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={classes["second-section"]}>
      <div className={`containerr ${classes.content}`}>
        <div className={classes["text-content"]}>
          <h1>Our successful journey begins with you</h1>
          <p>
            See how we build stronger relationships with our customers 
            as we change the way the way we move.
          </p>
        </div>
        <div className={classes["video-content"]}>
          <div className={classes.video}>
            <CaptainVideo />
          </div>
          <p>“My career took a lovely turn once I signed with Swvl.” <br/><stron>- Captain Mostafa</stron></p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;