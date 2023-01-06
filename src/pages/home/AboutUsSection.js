import classes from "./AboutUsSection.module.css";

const AboutUs = () => {
  return (
    <div className={`containerr ${classes["about-us"]}`}>
      <div className={classes["details"]}>
        <h1>
          swvl/swv(ə)l/
          <br/> 
          noun, verb,
          <br/> 
          adjective
        </h1>
        <p>
          A tech-driven, affordable, and convenient transportation service, committed to 
          enabling cities, people and businesses to move everywhere.
        </p>
      </div>
      <div className={classes["imge"]}>
        <img src={require("../../IMGES/home-imgs/umbrella.jpg")} alt="swvl-umprella"/>
      </div>
    </div>
  );
};

export default AboutUs;