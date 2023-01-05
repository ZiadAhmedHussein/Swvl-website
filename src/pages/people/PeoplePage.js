import classes from "./PeoplePage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LandingSection from "./LandingSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import SwvlWaySection from "./SwvlWaySection";
import ApplyAsSwvlerSection from "./ApplyAsSwvlerSection";

const PeoplePage = () => {
  return (
    <div className={classes["people-page"]}>
      <Header />
      <LandingSection />
      <FirstSection />
      <SecondSection />
      <SwvlWaySection />
      <ApplyAsSwvlerSection />
      <Footer />
    </div>
  );
};

export default PeoplePage;