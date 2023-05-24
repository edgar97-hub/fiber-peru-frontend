import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
  Switch,
  Outlet
} from "react-router-dom";
import { Home, PaymentMethods} from "./pages";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/"
        element={<Home/>}/>
      <Route path="/formas-de-pago"
        element={<PaymentMethods/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
