import classes from "./FirstSection.module.css";

const FirstSection = () => {
	return(
		<div className={`containerr ${classes["first-section"]}`}>
			<div className={classes.column}>
				<h1>Only for our Swvl Captains</h1>
				<i class="fa-solid fa-arrow-trend-up"></i>
				<p>Our Everyday Heroes & we salute you everyday!</p>
			</div>
			<ul>
				<li>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/red-car-img.png")} alt="img" />
					</div>
					<div className={classes["text-content"]}>
						<h3>A Steady Earning</h3>
						<p>A wise man that never doubts the importance of his job.</p>
					</div>
				</li>
				<li>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/green-car-img.png")} alt="img" />
					</div>
					<div className={classes["text-content"]}>
						<h3>Regular Weekly Payments</h3>
						<p>Never worry about providing for the ones you love.</p>
					</div>
				</li>
				<li>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/blue-car.png")} alt="img" />
					</div>
					<div className={classes["text-content"]}>
						<h3>Fixed timing, routes & prices</h3>
						<p>
							From the second you wake up to the second you go back to sleep, 
							your day and life are yours and planned to a T.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default FirstSection;