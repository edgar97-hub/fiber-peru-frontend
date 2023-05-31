import {Navbar} from "../../components";
import Video from "../../video/Video";
import Header from "../../components/home/navbar/Header";
import Services from "../../components/home/services/HomeService";
import ParticlesDemo from "./Particles";
import GoogleMap from "../../components/home/googlemaps/GoogleMap";
import WhatsappWidget from "../../components/home/whatsappWidget/WhatsappWidget";
import WhyChooseFiber from "../../components/home/whyChooseFiber/WhyChooseFiber";
import PlanBenefits from "../../components/home/planBenefits/PlanBenefits";
import PlanInfo from "../../components/home/planInfo/PlanInfo";
import TermsAndConditions from "../../components/home/termsAndConditions/TermsAndConditions";
import GooleMapsTest from "../../components/home/googlemaps/GooleMapsTest";
// import WhatsAppWidget from "../../components/WhatsappTest/index";
import DigitalTelevision from "../../components/home/menus/digitalTelevision/DigitalTelevision";

import Footer from "../../components/home/footer/Footer";

export default function PageDigitalTelevision() {
  return (
    <div class="wrapper">
      <Header/>
      <DigitalTelevision/>

      <Footer/>
    </div>
  );
}
