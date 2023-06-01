import Header from "../../components/home/navbar/Header";
import WhatsappWidget from "../../components/home/whatsappWidget/WhatsappWidget";
import Tiabaya from "../../components/home/districts/tiabaya/Tiabaya";
import WhyChooseFiberTiabaya from "../../components/home/districts/tiabaya/WhyChooseFiberTiabaya";
import WifiFiberPeru from "../../components/home/districts/tiabaya/WifiFiberPeru";
import BenefitsWifiMesh from "../../components/home/districts/tiabaya/BenefitsWifiMesh";
import Services from "../../components/home/services/HomeService";
import TermsAndConditions from "../../components/home/termsAndConditions/TermsAndConditions";
import Footer from "../../components/home/footer/Footer";

export default function pageTiabaya() {
  return (
    <div class="wrapper">
      <Header/>
      <Tiabaya/>
      <Services/>
      <WhyChooseFiberTiabaya/>
      <WifiFiberPeru/>
      <BenefitsWifiMesh/>
      <TermsAndConditions/>
      <Footer/>
      |
      <WhatsappWidget/>
    </div>
  );
}
