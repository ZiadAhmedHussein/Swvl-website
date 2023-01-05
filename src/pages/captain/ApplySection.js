import ApplyForm from "./ApplyForm";
import classes from "./ApplySection.module.css";

const ApplySection = () => {
  return (
    <div id="apply" className={classes["apply-section"]}>
      <div className={`containerr ${classes["content"]}`}>
        <h1>Jump on board the hustlin' bus!</h1>
        <ApplyForm />
      </div>
    </div>
  );
};

export default ApplySection;