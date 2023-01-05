import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${props.className} ${classes.button}`} type={props.type} >
      {props.children}
    </button>
  );
};

export default Button;