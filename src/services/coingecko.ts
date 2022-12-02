import axios, { AxiosResponse, AxiosError } from "axios";

 export const getPriceBln = async() => {
     const response = await axios.get('https://api.pancakeswap.info/api/v2/tokens/0xE90334c19c798C3A18d81b8cd16594247D5B19dd')
    
 }


