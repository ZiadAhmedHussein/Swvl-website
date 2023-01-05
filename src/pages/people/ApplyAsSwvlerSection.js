import classes from "./ApplyAsSwvlerSection.module.css";
import Button from "../../components/UI/Button";

const ApplyAsSwvlerSection = () => {
  return (
    <div className={classes["apply-as-swvler-section"]}>
      <div className={`containerr ${classes.content}`}>
        <h1>Be a Swvler.</h1>
        <p>
          Apply now email
          <br/>
          crafts@swvl.com
        </p>
        <Button>
          <a
            href="https://www.swvl.com/careers" 
            rel="noreferrer" target="_blank"
          >
            Apply
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ApplyAsSwvlerSection;