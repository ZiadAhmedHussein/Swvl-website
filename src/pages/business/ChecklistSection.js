import classes from "./ChecklistSection.module.css";

const ChecklistSection = () => {
	return (
		<div className={`containerr ${classes["checklist-section"]}`}>
			<div className={classes["text-content"]}>
				<h2>Take our quick Transportation Assessment Checklist.</h2>
				<p>
				Learn more about the impacts ine 
				cient and risky employee commutes can have on your business.
				</p>
				<a
					href="https://www.swvl.com/employee-transportation-checklist"
					rel="noreferrer"
					target="_blank"
				>
					Download the checklist
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			</div>
			<div className={classes["img-content"]}>
				<img src={require("../../IMGES/business-imgs/Business Page_Checklist.jpg")} alt="img" />
			</div>
		</div>
	);
};

export default ChecklistSection;