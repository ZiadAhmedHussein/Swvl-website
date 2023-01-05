import classes from "./LogoCompanies.module.css";

const LogoCompanies = (props) => {
  return(
    <div className={classes["logo-companies"]}>
      <div className={classes["imge"]}>
        <img src={props.logoImg} alt="logo" />
      </div>
    </div>
  );
};

export default LogoCompanies;