import classes from "./ExperianceSection.module.css";

const ExperianceSection = () => {
	return (
		<div className={classes["experiance-section"]}>
			<div className={classes["text-content"]}>
				<h1>
					Such a Swvlin' experience.
				</h1>
				<p>
					We're never more than 5 minutes away with pick-up stations closer from and to your home, 
					office or anywhere in between. Grabbing coffee along your way?
				</p>
			</div>
			<div className={classes["img-content"]}>
				<img src={require("../../IMGES/human-business.jpg")} alt="experiance-img" />
			</div>
		</div>
	);
};

export default ExperianceSection;