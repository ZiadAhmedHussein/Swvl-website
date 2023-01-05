import AboutUsSection from "./AboutUsSection";
import ChooseRideSection from "./ChooseRideSection";
import classes from "./HomePage.module.css";
import LandingSection from "./LandingSection";
import LoadAppSection from "./LoadAppSection";
import ServisesSection from "./ServisesSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const HomePage = () => {
  return(
    <div className={classes["home-page"]}>
      <Header />
      
      <LandingSection />
      <AboutUsSection />
      <ServisesSection />
      <ChooseRideSection />
      <LoadAppSection />
      <Footer />
    </div>
  );
};

export default HomePage;