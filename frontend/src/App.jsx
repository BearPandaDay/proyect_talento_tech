import {BrowserRouter} from 'react-router-dom';
// import './App.css'
import { WebRouters } from './routers/WebRouters';

function App() {

  return (
    <BrowserRouter>
      <WebRouters />
    </BrowserRouter>
  )
}

export default App
