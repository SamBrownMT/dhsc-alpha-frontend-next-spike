import axios, { AxiosResponse } from 'axios';
import { ASCOFData } from '../components/ascofbarchart/Ascofbarchart';
import { Request } from 'express';

// TODO Make more generic and reusable
// const constants = {
//     api: {
//         baseURL: 'https://dap-sql-connection.azurewebsites.net'
//     },
// };

async function GetAscofData(): Promise<ASCOFData[]> {

    console.log("fetching data")
    try {
        const token: string = await fetch('https://dapalpha-dev-app.azurewebsites.net/.auth/me')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const token = data[0].id_token;
                return token
            });
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response: AxiosResponse<ASCOFData[]> = await axios.get('https://dapalpha-func-app-dev.azurewebsites.net/api/sql_test', { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching ASCOF data:', error);
        throw error;
    }
}

export default GetAscofData;