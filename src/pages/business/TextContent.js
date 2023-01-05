import classes from "./TextContent.module.css";

const TextContent = (props) => {
  return (
    <div className={classes["text-content"]}>
			<p>{props.textContent}</p>
			<span>{props.auther}</span>
		</div>
  );
};

export default TextContent;