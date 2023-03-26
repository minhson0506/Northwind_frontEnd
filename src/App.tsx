import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import { OrderWithDetails } from './interface/Order';
import { DetailsPage } from './view/DetailsPage';
import { HomePage } from './view/HomePage';
import '@fontsource/inter/400.css';
import './App.css'

function App() {
    const [orders, setOrders] = useState<OrderWithDetails[]>([]);
    const [input, setInput] = useState('');
    const [checked, setChecked] = useState(false);
    return (
        <MainContext.Provider value={{ orders, setOrders, input, setInput, checked, setChecked }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="details/:id" element={<DetailsPage />}></Route>
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    );
}

export default App;
