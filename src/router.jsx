import { Link, Route, Routes, } from 'react-router-dom';
import Homepage from './components/homepage/homepage.jsx';
import App from './App.jsx';

export function Router() {

    return (
        <Routes>
            <Route  path="/" element={<Homepage />}/>
        </Routes>
     )
}