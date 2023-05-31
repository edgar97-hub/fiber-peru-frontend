import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import FiberOpticCoverage from '../../components/companies/menus/knowus/fiberOpticCoverage/FiberOpticCoverage'
import FiberNetworkOpticsinPeru from '../../components/companies/menus/knowus/fiberOpticCoverage/FiberNetworkOpticsinPeru'
import Contacto from '../../components/companies/menus/knowus/fiberOpticCoverage/Contacto'

import Footer from '../../components/companies/footer/Footer'

export default function PageFiberOpticCoverage() {
  return (
    <div class="wrapper">
      <Header />
      <FiberOpticCoverage />
      <FiberNetworkOpticsinPeru />
      <Contacto />
      <Footer />

    </div>
  )
}
