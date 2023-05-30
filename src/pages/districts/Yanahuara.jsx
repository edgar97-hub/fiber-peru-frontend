import Header from "../../components/home/navbar/Header";
import WhatsappWidget from "../../components/home/whatsappWidget/WhatsappWidget";
import Yanahuara from "../../components/home/districts/yanahuara/Yanahuara";
import WhyChooseFiberTiabaya from "../../components/home/districts/yanahuara/WhyChooseFiberTiabaya";
import WifiFiberPeru from "../../components/home/districts/yanahuara/WifiFiberPeru";
import BenefitsWifiMesh from "../../components/home/districts/yanahuara/BenefitsWifiMesh";
import Services from "../../components/home/services/Services3";
import TermsAndConditions from "../../components/home/termsAndConditions/TermsAndConditions";
import Footer from "../../components/home/footer/Footer";

export default function Home() {
    return (
        <div class="wrapper">
            <Header />
            <Yanahuara />
            <Services />
            <WhyChooseFiberTiabaya />
            <WifiFiberPeru />
            <BenefitsWifiMesh />
            <TermsAndConditions />
            <Footer />
        |   <WhatsappWidget />
        </div>
    );
}
