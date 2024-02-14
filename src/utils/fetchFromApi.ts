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

export const filterCharacters = async (page: number = 1, name: string = '', species: string = '', gender: string = '', status: string = '') => {
    try {
        const endpoint: string = "character";
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    page: page,
                    name: name,
                    status: status,
                    species: species,
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

export const filterLocation = async (page: number = 1, name: string = '', type: string = '', dimension: string = '') => {
    try {
        const endpoint: string = "location";
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    page: page,
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

export const filterEpisode = async (page: number = 1, name: string = '') => {
    try {
        const endpoint: string = 'episode';
        const response = await axios.get(`${BASE_URL}${endpoint}`,
            {
                responseType: 'json',
                params: {
                    page: page,
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