import classes from "./Rides.module.css";

const Rides = (props) => {
  return(
    <div className={classes["offer"]}>
      <div className={classes["desc"]}>
        <div className={classes["logo-img"]}>
          <img 
            src={props.logoImg} 
            alt="swvl-logo-img" 
          />
        </div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className={classes["imge"]}>
        <img src={props.rideImg} alt="daily-img" />
      </div>
    </div>
  );
};

export default Rides;