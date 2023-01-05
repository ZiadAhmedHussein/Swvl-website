import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OnProgressPage from "../../components/UI/OnProgressPage";
import classes from "./InvestorsPage.module.css";

const InvestorsPage = () => {
  return(
    <div className={classes["investors-page"]}>
      <Header />
      <OnProgressPage className={classes["on-progress"]} />
      <Footer />
    </div>
  );
};

export default InvestorsPage;