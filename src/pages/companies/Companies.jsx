import Header from '../../components/companies/navbar/Header'
import Slideshow from '../../components/companies/welcome/Slideshow'
import Services from '../../components/companies/services/Services'
import Partners from '../../components/companies/partners/Partners'

export default function Companies() {
  return (
    <div class="wrapper">
      <Header />
      <Slideshow />
      <Partners />
    </div>
  )
}
