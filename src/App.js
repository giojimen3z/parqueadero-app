import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VehicleAdd from './components/VehicleAdd';
import VehicleCheckout from './components/VehicleCheckout';
import VehiclesList from './components/VehiclesList';
import VehicleSearch from './components/VehicleSearch';  // Importa el componente VehicleSearch

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/vehicles/add" />} />  {/* Redirigir la raíz */}
                    <Route path="/vehicles" element={<VehiclesList />} />
                    <Route path="/vehicles/add" element={<VehicleAdd />} />
                    <Route path="/vehicles/checkout" element={<VehicleCheckout />} />  {/* Añadir la ruta para el componente VehicleCheckout */}
                    <Route path="/vehicles/:license_plate" element={<VehicleSearch />} />  {/* Cambiar VehicleDetail por VehicleSearch */}
                    <Route path="/search" element={<VehicleSearch />} />  {/* Añadir la ruta para el componente VehicleSearch */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
