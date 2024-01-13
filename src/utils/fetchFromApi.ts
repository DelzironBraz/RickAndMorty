import axios from "axios";

const BASE_URL: string = "https://rickandmortyapi.com/api/";

export const getAllCharacters = async () => {
    try {
        const endpoint: string = "character";
        const response = await axios.get(`${BASE_URL}${endpoint}`, { responseType: 'json' });

        if (response.status != 200) {
            throw new Error("Error getting characters");
        }

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const filterCharacters = async (name: string = '', status: string = '', species: string = '', type: string = '', gender: string = '') => {
    try {
        const endpoint: string = "character";
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    name: name,
                    status: status,
                    species: species,
                    type: type,
                    gender: gender
                }
            }
        );

        if (response.status != 200) {
            throw new Error("Error getting characters");
        }

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const filterLocation = async (name: string = '', type: string = '', dimension: string = '') => {
    try {
        const endpoint: string = "location";
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    name: name,
                    type: type,
                    dimension: dimension
                }
            }
        );

        if (response.status != 200) throw new Error("Error getting location");

        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const filterEpisode = async (name: string = '') => {
    try {
        const endpoint: string = 'episode';
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    name: name
                }
            }
        );

        if (response.status != 200) throw new Error("Error getting location");

        return response.data
    } catch (error) {
        console.error(error)
    }
}   