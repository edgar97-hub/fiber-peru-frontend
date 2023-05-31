import Header from '../../components/companies/navbar/Header'
import Aboutus from '../../components/companies/menus/knowus/aboutus/Aboutus'
import Ourapproach from '../../components/companies/menus/knowus/aboutus/Ourapproach'
import OurCertifications from '../../components/companies/menus/knowus/aboutus/OurCertifications'
import Telecominications from '../../components/companies/menus/knowus/aboutus/Telecominications'
import Ourvalues from '../../components/companies/menus/knowus/aboutus/ourvalues/Ourvalues'
import Regulation from '../../components/companies/menus/test1/Regulation'
import LinksPdf2 from '../../components/companies/menus/test1/LinksPdf2'

import Footer from '../../components/companies/footer/Footer'

export default function PageRegulation() {
  return (
    <div class="wrapper">
      <Header />
      <Regulation />
      <LinksPdf2 />
      <Footer />

    </div>
  )
}
