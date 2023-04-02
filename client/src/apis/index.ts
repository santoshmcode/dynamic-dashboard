import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

const getAllDashboards = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getDashboard = async (identifier: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${identifier}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { getAllDashboards, getDashboard }