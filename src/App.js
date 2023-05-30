import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
  Switch,
  Outlet
} from 'react-router-dom'
import {
  Home,
  Companies,
  PaymentMethods,
  Contac,
  MiPortal,
  Dashboard,
  Users,
  Inquiries
} from './pages'
import SignUp from './components/home/miPortal/signUp/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Home/>}/>
        <Route path="/hogar"
          element={<Home/>}/>
        <Route path="/empresas"
          element={<Companies/>}/>
        <Route path="/formas-de-pago"
          element={<PaymentMethods/>}/>
        <Route path="/contacto"
          element={<Contac/>}/>
        <Route path="/mi-portal"
          element={<MiPortal/>}/>
        <Route path="/registro"
          element={<SignUp/>}/>
        <Route path="/dashboard"
          element={<Users/>}/>
        <Route path="/usuarios"
          element={<Users/>}/>
        <Route path="/consultas"
          element={<Inquiries/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
