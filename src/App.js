import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
  Switch,
  Outlet,
} from 'react-router-dom'
import {
  Home,
  Companies,
  PaymentMethods,
  Contac,
  MiPortal,
  Dashboard,
  Users,
  Inquiries,
  Tiabaya,
  Yanahuara,
  PageAboutus,
  PageRegulation,
  PageFiberOpticCoverage,
  PageWorkWithus,
  PageBenefits,
  PageManagedServices,
  PageCybersecurityBusinesses,
  PageContact,
  PageInterconnectionVenuesDarkFiber,
  PageDigitalTelevision
} from './pages'
import SignUp from './components/home/miPortal/signUp/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hogar" element={<Home />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/formas-de-pago" element={<PaymentMethods />} />
        <Route path="/contacto" element={<Contac />} />
        <Route path="/mi-portal" element={<MiPortal />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/dashboard" element={<Users />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/consultas" element={<Inquiries />} />
        <Route path="/tiabaya" element={<Tiabaya />} />
        <Route path="/yanahuara" element={<Yanahuara />} />

        {/** routes companies */}
        <Route path="/quienes-somos" element={<PageAboutus />} />
        <Route path="/regulacion" element={<PageRegulation />} />
        <Route path="/fibra-optica-cobertura" element={<PageFiberOpticCoverage />} />

        <Route path="/trabaja-con-nosotros" element={<PageWorkWithus />} />
        <Route path="/beneficios" element={<PageBenefits />} />
        <Route path="/servicios-gestionados" element={<PageManagedServices />} />
        <Route path="/seguridad-gestionada" element={<PageCybersecurityBusinesses />} />
        <Route path="/empresa-contacto" element={<PageContact />} />
        <Route path="/interconexion-sedes-fibra-oscura" element={<PageInterconnectionVenuesDarkFiber />} />
        <Route path="/television-digital" element={<PageDigitalTelevision />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
