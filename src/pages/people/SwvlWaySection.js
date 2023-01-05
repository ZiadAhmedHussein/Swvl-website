import classes from "./SwvlWaySection.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SwvlWaySlider from "./SwvlWaySlider";

const SwvlWaySection = () => {
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
  const DATA_SWVL_WAY = [
    {
      id:"01",
      desc: "Speak one language, numbers.",
    },
    {
      id:"02",
      desc: "You are a co-founder. Act like one!",
    },
    {
      id:"03",
      desc: "We are either hungry or food.",
    },
    {
      id:"04",
      desc: "I it's not to day, we wasted a day.",
    },
    {
      id:"05",
      desc: "We only hire people better than us.",
    },
    {
      id:"06",
      desc: "Customers & captains are the end destination & the starting point",
    },
  ]
  return (
    <div className={`containerr ${classes["swvl-way-section"]}`}>
      <div className={classes.content}>
        <h1>Now What Is The Swvl Way?</h1>
        <Carousel responsive={responsive}>
          {DATA_SWVL_WAY.map((way) => {
            return (
              <SwvlWaySlider
                key={way.id} 
                counter={way.id}
                desc={way.desc}
              />
            );
          })}
        </Carousel>
      </div>
      
    </div>
  );
};

export default SwvlWaySection;