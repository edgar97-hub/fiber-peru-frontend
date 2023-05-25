import { Navbar } from "../../components";
import Video from "../../video/Video";
import Header from "../../components/Header";
import Services from "../../components/services/Services";
import GoogleMap from "../../components/googlemaps/GoogleMap";
import WhatsappWidget from "../../components/whatsappWidget/WhatsappWidget";
import WhyChooseFiber from "../../components/whyChooseFiber/WhyChooseFiber";
import PlanBenefits from "../../components/planBenefits/PlanBenefits";
import PlanInfo from "../../components/planInfo/PlanInfo";
import TermsAndConditions from "../../components/termsAndConditions/TermsAndConditions";
import GooleMapsTest from "../../components/googlemaps/GooleMapsTest";
//import WhatsAppWidget from "../../components/WhatsappTest/index";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function PageContact() {
    return (
        <div class="wrapper">
            <Header />
            <Contact />
            <Footer />

        </div>
    );
}
