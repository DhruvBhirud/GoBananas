import axios from 'axios';

const API_URL = 'https://api.thedogapi.com/v1/breeds';

export const fetchBreeds = async () => {
    try {
        //fetching data from the API
        const response = await axios.get(API_URL);
        //console.log("Data fetched successfully: ", response.data);
        return response.data;
    } catch (error) {
        //throwing an error if there is an issue with fetching the data
        console.error("Error fetching data: ", error);
        throw error;
    }
};
