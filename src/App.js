import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Inventory } from './pages/Inventory'; 
import { Instructions } from './pages/Instructions';
import { Inputs } from './pages/Inputs';
import { Outputs } from './pages/Outputs';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
          <Routes>
           <Route path={`/selina_test`} element={ <Instructions />}/>
           <Route path={`/selina_test/inventario`} element={ <Inventory />}/>
           <Route path={`/selina_test/entradas`} element={ <Inputs />}/>
           <Route path={`/selina_test/salidas`} element={ <Outputs />}/>
          </Routes>
      <Footer />
    </BrowserRouter> 
    </>
  );
}
export default App;
