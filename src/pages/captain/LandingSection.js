import classes from "./LandingSection.module.css";
import Button from "../../components/UI/Button";

const LandingSection = () => {
	return (
		<div className={classes["landing-section"]}>
			<div className={classes.content}>
				<h1>Aye, Aye <br/> Captain!</h1>
				<Button className={classes.button} type="button">
					<a href="#apply" rel="noreferrer">Apply</a>
				</Button>
			</div>
		</div>
	);
};

export default LandingSection;