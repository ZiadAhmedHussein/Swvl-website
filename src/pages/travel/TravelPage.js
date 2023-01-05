import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OnProgressPage from "../../components/UI/OnProgressPage";
import classes from "./TravelPage.module.css";

const TravelPage = () => {
  return(
    <div className={classes["travel-page"]}>
      <Header />
      <OnProgressPage className={classes["on-progress"]} />
      <Footer />
    </div>
  );
};

export default TravelPage;