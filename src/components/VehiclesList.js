import React, { useState, useEffect } from 'react';
import vehicleService from '../services/vehicleService';

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        vehicleService.getVehicles().then(data => {
            if (Array.isArray(data)) {
                setVehicles(data);
            } else {
                console.error("Expected an array but got:", data);
                setVehicles([]);
            }
        }).catch(error => {
            console.error("There was an error fetching the vehicles!", error);
            setVehicles([]); // En caso de error, asegúrate de que vehicles sea un arreglo vacío.
        });
    }, []);

    return (
        <div>
            <h2>Vehicles List</h2>
            {vehicles.length > 0 ? (
                <ul>
                    {vehicles.map(vehicle => (
                        <li key={vehicle.license_plate}>
                            {vehicle.brand} {vehicle.vehicle_model} ({vehicle.license_plate})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No vehicles found.</p>
            )}
        </div>
    );
};

export default VehiclesList;
