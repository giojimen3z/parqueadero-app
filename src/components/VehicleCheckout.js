import React, { useState } from 'react';
import vehicleService from '../services/vehicleService';

const VehicleCheckout = () => {
    const [licensePlate, setLicensePlate] = useState('');
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState(null);

    const handleCheckout = () => {
        vehicleService.checkoutVehicle(licensePlate).then(data => {
            setVehicle(data);
            setError(null);
        }).catch(err => {
            setError("Vehicle not found or error during checkout");
            setVehicle(null);
        });
    };

    return (
        <div>
            <h2>Checkout Vehicle by License Plate</h2>
            <input
                type="text"
                value={licensePlate}
                onChange={e => setLicensePlate(e.target.value)}
                placeholder="Enter license plate"
            />
            <button onClick={handleCheckout}>Checkout</button>

            {error && <p>{error}</p>}
            {vehicle && (
                <div>
                    <h3>Vehicle Checkout Details</h3>
                    <p>License Plate: {vehicle.license_plate}</p>
                    <p>Brand: {vehicle.brand}</p>
                    <p>Model: {vehicle.vehicle_model}</p>
                    <p>Color: {vehicle.color}</p>
                    <p>Check-in Time: {vehicle.check_in_time}</p>
                    <p>Check-out Time: {vehicle.check_out_time}</p>
                    <p>Cost: {vehicle.cost}</p>
                </div>
            )}
        </div>
    );
};

export default VehicleCheckout;
