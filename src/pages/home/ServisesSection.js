import classes from "./ServisesSection.module.css";

const ServisesSection = () => {
	return (
		<div className={`containerr ${classes["servises-section"]}`}>
			<h1>
			Your everyday time, comfort and
			<br/>
			money matter to us.
			</h1>
			<div className={classes["content"]}>
				<div className={classes["column"]}>
					<h2>Time</h2>
					<p>
            Tik tok tik tok We'll always take you there right on the dot 
						with rides moving around the clock.
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/home-imgs/servises_time.png")} alt="time_img" />
					</div>
				</div>
				<div className={classes["column"]}>
					<h2>Money</h2>
					<p>
						They say money can't buy you happiness, 
            but we'd prefer to cry on a beach vacation.
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/home-imgs/servises_money.png")} alt="monye_img" />
					</div>
				</div>
				<div className={classes["column"]}>
					<h2>Comfort</h2>
					<p>
						20 going on 65. We'll take the years 
						off your back pain with our comfortable everyday rides.
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/home-imgs/servises_comfortable.png")} alt="comfortable_img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServisesSection;