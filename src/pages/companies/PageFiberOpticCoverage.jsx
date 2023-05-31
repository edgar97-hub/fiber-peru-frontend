import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import Regulation from '../../components/companies/menus/test1/Regulation'
import FiberOpticCoverage from '../../components/companies/menus/coberFibraoptica/FiberOpticCoverage'
import FiberNetworkOpticsinPeru from '../../components/companies/menus/coberFibraoptica/FiberNetworkOpticsinPeru'

import Footer from '../../components/companies/footer/Footer'

export default function PageFiberOpticCoverage() {
  return (
    <div class="wrapper">
      <Header />
      <FiberOpticCoverage />
      <FiberNetworkOpticsinPeru />

      <Footer />

    </div>
  )
}
