import axios from 'axios';

const API_URL = 'http://localhost:8080';

const getVehicles = () => {
    return axios.get(`${API_URL}/vehicles`).then(response => {
        return response.data.data; // Acceder a los datos anidados bajo "data"
    });
};

const getVehicleByLicensePlate = license_plate => {
    return axios.get(`${API_URL}/vehicles/${license_plate}`).then(response => {
        return response.data.data; // Acceder a los datos anidados bajo "data"
    });
};

const addVehicle = vehicle => {
    return axios.post(`${API_URL}/vehicles`, vehicle);
};

const checkoutVehicle = license_plate => {
    return axios.post(`${API_URL}/vehicles/checkout`, { license_plate }).then(response => {
        return response.data.data; // Acceder a los datos anidados bajo "data"
    });
};

const vehicleService = {
    getVehicles,
    getVehicleByLicensePlate,
    addVehicle,
    checkoutVehicle
};

export default vehicleService;
