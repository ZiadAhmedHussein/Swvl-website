import classes from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <div className={`containerr ${classes["about-us-section"]}`}>
        <h1>
          A Swvler Swvls everyday in the most Swvlin ride. Following?
        </h1>
        <div className={classes["column"]}>
          <p>
            Arrive at your destination in the smoothest ride possible, 
            by sailing through real-time trip planning to payment with a few clicks.
          </p>
          <div className={classes["arrow-img"]}>
            <img src={require("../../IMGES/daily_imges/arrow.jpg")} alt="img" />
          </div>
        </div>
    </div>
  );
};

export default AboutUsSection;