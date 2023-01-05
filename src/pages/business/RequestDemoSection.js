import classes from "./RequestDemoSection.module.css";

import RequestForm from "./RequestForm";


const RequestDemoSection = () => {
  return (
		<div className={classes["request-demo-section"]}>
			<div className={classes["text-content"]}>
				<span>Swvl Business</span>
				<h1>Start moving more efficiently</h1>
			</div>
			<RequestForm />
		</div>
	);
};

export default RequestDemoSection;