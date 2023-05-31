import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import CybersecurityBusinesses from '../../components/companies/menus/services/managedSecurity/CybersecurityBusinesses'
import PortfolioServices from '../../components/companies/menus/services/managedSecurity/PortfolioServices'

import Footer from '../../components/companies/footer/Footer'

export default function PageCybersecurityBusinesses() {
  return (
    <div class="wrapper">
      <Header />
      <CybersecurityBusinesses />
      <PortfolioServices />
      <Footer />

    </div>
  )
}
