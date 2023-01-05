import classes from "./LandingSection.module.css";
import Button from "../../components/UI/Button";

const LandingSection = () => {
	return (
		<div className={classes["landing-section"]}>
			<div className={classes["text-content"]}>
				<h1>
					Smarter transportation
					for your staff, student, comunity 
				</h1>
				<p>
					Replace the inefficiencies plaguing your transportation.
				</p>
				<Button className={classes.button} type="button">
					<a href="kjb" rel="noreferrer">SPEAK WITH OUR TEAM</a>
				</Button>
				<i class="fa-solid fa-angles-down"></i>
			</div>
		</div>
	);
};

export default LandingSection;