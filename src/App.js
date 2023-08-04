import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';
import C05operador from './component/C05operador';
import C06matriz from './component/C06matriz';
import C07matrizOperaciones from './component/C07matrizOperaciones';

function App() {
  return (
    <div>
      <h1>Componente 7: Fabian</h1>
      <C07matrizOperaciones></C07matrizOperaciones>

      <h1>Componente 5: Fabian</h1>
      <C05operador></C05operador>

      <h1>Componente 3: Fabian</h1>
      <C03dobleestado></C03dobleestado>

      <h1>Componente 1: Fabian</h1>
      <C01componente></C01componente>
    </div>
  );
}

export default App;
