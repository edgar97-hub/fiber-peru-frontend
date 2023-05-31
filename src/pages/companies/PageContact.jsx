import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import Contact from '../../components/companies/menus/contact/Contact'
import FormContact from '../../components/companies/menus/contact/FormContact'

import Footer from '../../components/companies/footer/Footer'

export default function PageContact() {
  return (
    <div class="wrapper">
      <Header />
      <Contact />
      <FormContact />
      <Footer />

    </div>
  )
}
