import classes from "./OffersSection.module.css";

const OffersSection = () => {
	return (
		<div className={`containerr ${classes["offers-section"]}`}>
			<div className={classes["text-content"]}>
        <h1>
					As comfortable as a couch & as always, safe & sound
        </h1>
        <ul>
					<li>Where would you like to go?</li>
					<li>Choose your ride, time and date</li>
					<li>Book your ride.</li>
				</ul>
      </div>
      <div className={classes["img-content"]}>
        <img src={require("../../IMGES/servises_money.png")} alt="swvl-umprella"/>
      </div>
		</div>
	);
};

export default OffersSection;