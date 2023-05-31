import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import ManagedServices from '../../components/companies/menus/services/managedServices/ManagedServices'
import DevicesNetwork from '../../components/companies/menus/services/managedServices/DevicesNetwork'

import Footer from '../../components/companies/footer/Footer'

export default function PageManagedServices() {
  return (
    <div class="wrapper">
      <Header />
      <ManagedServices />
      <DevicesNetwork />
      <Footer />

    </div>
  )
}
