import classes from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={`containerr ${classes["second-section"]}`}>
      <div className={classes["img-content"]}>
        <img src={require("../../IMGES/human-daily.jpg")} alt="img" />
      </div>
      <div className={classes["text-content"]}>
        <h1>We have a story to tell.</h1>
        <p>
          From the good, bad and ugly days, to the exciting, thrilling and fun-filled
          experiences. They're here to be heard.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;