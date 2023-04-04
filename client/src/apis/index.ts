import axios from "axios";

const API_BASE_URL = "https://mysterious-zipper-tuna.cyclic.app/api";

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

const getWidgetData = async (_id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/widget/${_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



export { getAllDashboards, getDashboard, getWidgetData }