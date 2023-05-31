import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import Benefits from '../../components/companies/menus/knowus/benefits/Benefits'
import OurBenefits from '../../components/companies/menus/knowus/benefits/OurBenefits'

import Footer from '../../components/companies/footer/Footer'

export default function PageBenefits() {
  return (
    <div class="wrapper">
      <Header />
      <Benefits />
      <OurBenefits />

      <Footer />

    </div>
  )
}
