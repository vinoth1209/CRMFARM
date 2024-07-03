import baseAxios from "axios";
import { Tenantname } from "./auth-services";


const axios = baseAxios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});


//todo: define interceptors and other configuration like baseURL, headers etc. here
export default axios;

const apiConfig = {};
apiConfig.URL1 ="https://127.0.0.1:8000/"
apiConfig.URL =`https://backend.crmfarm.app/`



// Create an axios instance with default headers
const axiosInstance = axios.create({
    headers: {
      db: localStorage.getItem("DBName"),
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});
  

export {apiConfig,axiosInstance};