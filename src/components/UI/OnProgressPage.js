import classes from "./OnProgressPage.module.css";

const OnProgressPage = (props) => {
	return (
		<div className={`${props.className} ${classes["on-progress-page"]}`}>
			<h1>On Progress</h1>
			<h3>Ditailse</h3>
			{props.children}
		</div>
	);
};

export default OnProgressPage;