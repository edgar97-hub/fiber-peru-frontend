import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
  Switch,
  Outlet
} from "react-router-dom";
import {Home, PaymentMethods, Contac, MiPortal} from "./pages";
import SignUp from "./components/miPortal/signUp/SignUp"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Home/>}/>
        <Route path="/formas-de-pago"
          element={<PaymentMethods/>}/>
        <Route path="/contacto"
          element={<Contac/>}/>
          <Route path="/mi-portal"
          element={<MiPortal/>}/>
          <Route path="/registro"
          element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
