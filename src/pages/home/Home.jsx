import {Navbar} from "../../components";
import Video from "../../video/Video";
import Header from "../../components/Header";
import Services from "../../components/services/Services";
import ParticlesDemo from "./Particles";
import GoogleMap from "../../components/googlemaps/GoogleMap";
import WhatsappWidget from "../../components/whatsappWidget/WhatsappWidget";
import WhyChooseFiber from "../../components/whyChooseFiber/WhyChooseFiber";
import PlanBenefits from "../../components/planBenefits/PlanBenefits";
import PlanInfo from "../../components/planInfo/PlanInfo";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div class="wrapper">
           {/**  <Navbar/> */}
            <Header/>
            <Video />
            <Services />
            <GoogleMap />
            <WhyChooseFiber />
            <PlanBenefits />
            <PlanInfo />
            <Footer />
            <WhatsappWidget />

        </div>
    );
    }