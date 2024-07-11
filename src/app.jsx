import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import { ContainerJogar } from './components/container-jogar.jsx'


export function App() {
  return (
    
    <BrowserRouter>
    <ContainerJogar/>
        <Router />
    </BrowserRouter>
  )
}