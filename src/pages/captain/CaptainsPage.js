import classes from "./CaptainsPage.module.css";

import Header from "../../components/Header";
import LandingSection from "./LandingSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ApplySection from "./ApplySection";
import Footer from "../../components/Footer";

const CaptainsPage = () => {
  return (
    <div className={classes["captain-page"]}>
      <Header />
      <LandingSection />
      <FirstSection />
      <SecondSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default CaptainsPage;