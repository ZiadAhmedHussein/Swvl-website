import classes from "./NeedsSolutionSection.module.css";
import Button from "../../components/UI/Button";

const NeedsSolutionSection = () => {
  return (
		<div className={classes["needs-solution-section"]}>
			<h1>Flexible solutions for changing needs</h1>
			<div className={classes["content"]}>
				<div className={classes["img-content"]}>
					<img src={require("../../IMGES/business-imgs/Business Page_needs-part.jpg")} alt="img" />
				</div>
				<div className={classes["text-content"]}>
					<h2>
						Swvl was born out of a growing need for safe, 
						reliable, efficient employee transit.
					</h2>
					<p>
						We collect insights from thousands of daily users 
						to provide the transportation solutions people need right now.
					</p>
					<span>Want to learn more?</span>
					<Button>
					<a
					  href="https://www.swvl.com/en/blog?hsCtaTracking=19e3d8a5-f27e-4ea8-8cac-5cacd2f8e4fe%7C58d19f9d-a1c6-460a-b142-c2a8bca9ad28" 
						rel="noreferrer"
						target="_blank"
					>
						READ THE BLOG
					</a>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NeedsSolutionSection;