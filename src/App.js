import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Router,
	Switch,
	Outlet,
} from "react-router-dom";
import {Home} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
