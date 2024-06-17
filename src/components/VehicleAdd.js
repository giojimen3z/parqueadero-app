import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import vehicleService from '../services/vehicleService';

const VehicleAdd = () => {
    const { register, handleSubmit } = useForm();
    const [vehicle, setVehicle] = useState({});

    const onSubmit = data => {
        vehicleService.addVehicle(data).then(response => {
            setVehicle(response.data);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="license_plate">License Plate:</label>
            <input type="text" id="license_plate" {...register('license_plate')} required />

            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" {...register('brand')} required />

            <label htmlFor="vehicle_model">Model:</label>
            <input type="text" id="vehicle_model" {...register('vehicle_model')} required />

            <label htmlFor="color">Color:</label>
            <input type="text" id="color" {...register('color')} required />

            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default VehicleAdd;
