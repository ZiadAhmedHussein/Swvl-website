import classes from "./TextSliderSection.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TextContent from "./TextContent";

const TextSliderSection = () => {
	const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 992 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 992, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
	const TEXT_CONTENT = [
    {
      id:1,
      "text-content": "“Static supply and demand-led transport planning is increasingly incompatible with new perceptions of mobility and public appetite for digital services. The dynamic nature of on-demand transportation offers an opportunity to enhance public transport and attract new users.”",
			"auther": "Essex County Council"
    },
    {
      id:2,
      "text-content": "“Munich Airport has taken an important step towards more sustainable on-site transport. By switching to an active demand-led approach, we were able to greatly reduce our fleet size without compromising on r eliability and efficiency.”",
			"auther": "Philip Wagner, Senior Master Planner, Flughafen München GmbH",
    },
	]
	return (
		<div className={classes["text-slider-section"]}>
			<div className="containerr">
				<h3>TAKE IT FROM OUR CUSTOMERS</h3>
				<Carousel className={classes.main} responsive={responsive}>
				{TEXT_CONTENT.map((text) => {
					return (
						<TextContent
							key={text.id}
							textContent={text["text-content"]}
							auther={text["auther"]}
						/> 
					);
				})}
      </Carousel>;
			</div>
		</div>
	);
};


export default TextSliderSection;


