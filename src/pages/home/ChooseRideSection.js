
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from "./ChooseRideSection.module.css";
import Rides from './Rides';

const ChooseRideSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const DATA_RIDES = [
    {
      id:1,
      "logo-img": `${require("../../IMGES/header-imges/swvl-logo.png")}`,
      name: "daily",
      desc: "Your timely, affordable, and comforting everyday bus ride around the city.",
      "ride-img": `${require("../../IMGES/human-daily.jpg")}`,
    },
    {
      id:2,
      "logo-img": `${require("../../IMGES/header-imges/swvl-logo.png")}`,
      name: "business",
      desc: "Solutions that manage transportation more efficiently for all kinds of businesses.",
      "ride-img": `${require("../../IMGES/human-business.jpg")}`,
    },
    {
      id:3,
      "logo-img": `${require("../../IMGES/header-imges/swvl-logo.png")}`,
      name: "travel",
      desc: "Affordable long- distance rides between cities everyday.",
      "ride-img": `${require("../../IMGES/human-travel.jpg")}`,
    },
  ]
  return (
    <div className={classes["choose-ride-section"]}>
      <header className="containerr">
        <h1>Now, choose your ride!</h1>
        <p>
          Tailored to all your nitty-gritty needs, transported by Captains who
          <br/>
          maintain a tight ship, so to speak (aye, aye captain)
        </p>
      </header>
      <Carousel className={classes.main} responsive={responsive}>
      {DATA_RIDES.map((ride) => {
        return (
          <Rides
            
            key={ride.id} 
            logoImg={ride["logo-img"]}
            name={ride.name}
            desc={ride.desc}
            rideImg={ride["ride-img"]}
          />
        );
      })}
      </Carousel>;
    </div>
  );
};

export default ChooseRideSection;