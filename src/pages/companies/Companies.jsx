import Header from '../../components/companies/navbar/Header'
import Slideshow from '../../components/companies/welcome/Slideshow'
import Services from '../../components/companies/services/Services'
import Partners from '../../components/companies/partners/Partners'
import CloudServices from '../../components/companies/cloudServices/CloudServices'
import Softphone from '../../components/companies/softphone/Softphone'
import Webinars from '../../components/companies/webinars/Webinars'
import Footer from '../../components/companies/footer/Footer'

export default function Companies() {
  return (
    <div class="wrapper">
      <Header />
      <Slideshow />
      <Services />
      <Partners />
      <CloudServices />
      <Softphone />
      <Footer />

    </div>
  )
}
