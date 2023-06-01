import Header from "../../components/home/navbar/Header";
import WhatsappWidget from "../../components/home/whatsappWidget/WhatsappWidget";
import Sachaca from "../../components/home/districts/sachaca/Sachaca";
import WhyChooseFiberTiabaya from "../../components/home/districts/yanahuara/WhyChooseFiberTiabaya";
import WifiFiberPeru from "../../components/home/districts/yanahuara/WifiFiberPeru";
import BenefitsWifiMesh from "../../components/home/districts/yanahuara/BenefitsWifiMesh";
import Services from "../../components/home/services/HomeService";
import TermsAndConditions from "../../components/home/termsAndConditions/TermsAndConditions";
import Footer from "../../components/home/footer/Footer";

export default function pageSachaca() {
  return (
    <div class="wrapper">
      <Header/>
      <Sachaca/>
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
