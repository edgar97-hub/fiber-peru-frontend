import { Navbar } from "../../components";
import Video from "../../video/Video";
import Header from "../../components/home/navbar/Header";
import Services from "../../components/home/services/Services3";
import ParticlesDemo from "./Particles";
import GoogleMap from "../../components/home/googlemaps/GoogleMap";
import WhatsappWidget from "../../components/home/whatsappWidget/WhatsappWidget";
import WhyChooseFiber from "../../components/home/whyChooseFiber/WhyChooseFiber";
import PlanBenefits from "../../components/home/planBenefits/PlanBenefits";
import PlanInfo from "../../components/home/planInfo/PlanInfo";
import TermsAndConditions from "../../components/home/termsAndConditions/TermsAndConditions";
import GooleMapsTest from "../../components/home/googlemaps/GooleMapsTest";
//import WhatsAppWidget from "../../components/WhatsappTest/index";
import Footer from "../../components/home/footer/Footer";

export default function Home() {
    return (
        <div class="wrapper">
            <Header />
            <Video />
            <Services />
            {/* <GooleMapsTest /> */}
            <WhyChooseFiber />
            <PlanBenefits />
            <PlanInfo />
            <TermsAndConditions />
            <Footer />
        |   <WhatsappWidget />
        </div>
    );
}
