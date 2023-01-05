import classes from "./ServisesSection.module.css";

const ServisesSection = () => {
  return (
    <div className={`containerr ${classes["servises-section"]}`}>
      <div className={classes["content"]}>
				<div className={classes["column"]}>
					<h1>Book</h1>
					<p>
            A ride on your phone
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/servises_time.png")} alt="time_img" />
					</div>
				</div>
				<div className={classes["column"]}>
					<h1>Swvl</h1>
					<p>
            And get picked up at your closest station
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/servises_money.png")} alt="monye_img" />
					</div>
				</div>
				<div className={classes["column"]}>
					<h1>Save</h1>
					<p>
            With pocket friendly rates
					</p>
					<div className={classes["imge"]}>
						<img src={require("../../IMGES/servises_comfortable.png")} alt="comfortable_img" />
					</div>
				</div>
			</div>
    </div>
	);
};

export default ServisesSection;