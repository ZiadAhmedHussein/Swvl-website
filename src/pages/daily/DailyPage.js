import classes from "./DailyPage.module.css";
import LandingSection from "./LandingSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUsSection from "./AboutUsSection";
import ServisesSection from "./ServisesSection";
import ExperianceSection from "./ExperianceSection";
import OffersSection from "./OffersSection";
import PromoVideo from "../../VIDEOS/PromoVideo";

const DailyPage = () => {
  return(
    <div className={classes["daily-page"]}>
      <Header />
      <LandingSection />
      <AboutUsSection />
      <ServisesSection />
      <ExperianceSection />
      <OffersSection />
      <PromoVideo />
      <Footer />
    </div>
  );
};

export default DailyPage;