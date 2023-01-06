import classes from "./RecommendationSection.module.css";

const RecommendationSection = () => {
	return (
		<div className={`containerr ${classes["recommendation-section"]}`}>
			<header>
				<h1>Be prepared for unexpected challenges</h1>
				<p>
					Swvl fills in the gap between fragmented public transportation and expensive 
					on-demand services with tech-enabled solutions.
				</p>
			</header>
			<div className={classes["recommends"]}>
				<div className={classes["part"]}>
					<div className={classes["text-content"]}>
						<h3>SAFE DATA-DRIVEN ROUTES</h3>
						<p>
							We use GPS tracking for 100% visibility on all routes
						</p>
					</div>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/business-imgs/Business Page_Safe Routes.jpg")} alt="recommend-img" />
					</div>
				</div>
				<div className={classes["part"]}>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/business-imgs/Business Page_Support.jpg")} alt="recommend-img" />
					</div>
					<div className={classes["text-content"]}>
						<h3>REAL PEOPLE, READY TO ASSIST 24/7</h3>
						<p>
							We offer 24/7 support including on holidays!
						</p>
					</div>
				</div>
				<div className={classes["part"]}>
					<div className={classes["text-content"]}>
						<h3>QUICK, AUTOMATED PROCESSING</h3>
						<p>
							Less than 1-day turnaround on invoicing
						</p>
					</div>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/business-imgs/Business Page_Processing.jpg")} alt="recommend-img" />
					</div>
				</div>
				<div className={classes["part"]}>
					<div className={classes["img-content"]}>
						<img src={require("../../IMGES/business-imgs/Business Page_Transport.jpg")} alt="recommend-img" />
					</div>
					<div className={classes["text-content"]}>
						<h3>RELIABLE AND COMPLETELY VISIBLE TRANSPORT</h3>
						<p>
							Our fleets have 99.9% on time reliability
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecommendationSection;