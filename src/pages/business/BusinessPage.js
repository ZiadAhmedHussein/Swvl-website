import classes from "./BusinessPage.module.css";
import Header from "../../components/Header";
import LandingSection from "./LandingSection";
import BusinessCardSection from "./BusinessCardSection";
import RecommendationSection from "./RecommendationSection";
import Footer from "../../components/Footer"
import InformationSection from "./InformationSection";
import NeedsSolutionSection from "./NeedsSolutionSection";
import ChecklistSection from "./ChecklistSection";
import TextSliderSection from "./TextSliderSection";
import RequestDemoSection from "./RequestDemoSection";

const BusinessPage = () => {
  return(
    <div className={classes["business-page"]}>
      <Header />
      <LandingSection />
      <BusinessCardSection />
      <RecommendationSection />
      <InformationSection />
      <NeedsSolutionSection />
      <ChecklistSection />
      <TextSliderSection />
      <RequestDemoSection />
      <Footer />
    </div>
  );
};

export default BusinessPage;