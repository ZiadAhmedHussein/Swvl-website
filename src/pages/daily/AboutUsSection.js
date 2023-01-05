import classes from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <div className={`containerr ${classes["about-us-section"]}`}>
        <h1>
          A Swvler Swvls everyday in the most Swvlin ride. Following?
        </h1>
        <p>
          Arrive at your destination in the smoothest ride possible, 
          by sailing through real-time trip planning to payment with a few clicks.
          <i class="fa-solid fa-arrow-trend-up"></i>
        </p>
    </div>
  );
};

export default AboutUsSection;