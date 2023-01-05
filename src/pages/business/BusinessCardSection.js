import classes from "./BusinessCardSection.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoCompanies from "./LogoCompanies";



const BusinessCardSection = () => {
	const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const LOGO_COMPANIES = [
    {
      id:1,
      "logo": `${require("../../IMGES/companies-logo/alibaba-logo.jpg")}`,
    },
    {
      id:2,
      "logo": `${require("../../IMGES/companies-logo/Allianz-logo.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/amazon_logo.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/AXA_Logo.png")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/Beiersdorf-logo.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/Decathlon_Logo.png")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/EBC.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/emaar.png")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/etisalat.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/Henkel-Logog.jpg")}`,
    },
    {
      id:3,
      "logo": `${require("../../IMGES/companies-logo/mars.jpg")}`,
    },
  ]
	return (
		<div className={classes["business-card-section"]}>
			<div className={classes["curve"]}></div>
			<div className={`containerr ${classes["cards-component"]}`}>
				<div className={classes["card"]}>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/red-car-img.png")} alt="car-img" />
					</div>
					<h3>Businesses</h3>
					<p>
						Fixed or flexible transportation solutions 
						for your staff that are convenient and cost-effective for your business.
					</p>
					<a
						href="https://www.swvl.com/employee-transportation-services" 
						rel="noreferrer"
						target="_blank"
					>
						Learn More
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
				<div className={classes["card"]}>
					<div className={classes["img-content"]}>
					  <img src={require("../../IMGES/green-car-img.png")} alt="car-img" />
					</div>
					<h3>Education</h3>
					<p>
						We offer a suite of transportation solutions 
						for your students to move from/to and on campus safely and conveniently.
					</p>
					<a
						href="https://www.swvl.com/school-and-university-transportation-services" 
						rel="noreferrer"
						target="_blank"
					>
						Learn More
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
				<div className={classes["card"]}>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/red-car-img.png")} alt="car-img" />
					</div>
					<h3>Communities</h3>
					<p>
						Unlock the power of data and technology to optimize your operations. 
						Maximize vehicle utilization and user experience.
					</p>
					<a
						href="https://www.swvl.com/community-transportation-services" 
						rel="noreferrer"
						target="_blank"
					>
						Learn More
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
				<div className={classes["card"]}>
					<div className={classes["img-content"]}>
					<img src={require("../../IMGES/green-car-img.png")} alt="car-img" />
					</div>
					<h3>Transit Operators</h3>
					<p>
						Take back control over your operations and cost 
						with our cutting-edge technology for unbeaten visibility & optimization.
					</p>
					<a
						href="https://www.swvl.com/transit-operators-saas" 
						rel="noreferrer"
						target="_blank"
					>
						Learn More
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
			</div>
			<Carousel className={classes.main} responsive={responsive}>
				{LOGO_COMPANIES.map((company) => {
					return (
						<LogoCompanies
							key={company.id} 
							logoImg={company["logo"]}
						/>
					);
				})}
      </Carousel>;
		</div>
	);
};

export default BusinessCardSection;