import { apiConfig } from "./config";
import axios from "./config";

const authService = {};

authService.getUserLogin = (formData) => {
  return axios.post(apiConfig.URL + "auth_token", formData);
};

authService.getUserDetails = (username) => {
  debugger;

  return axios.get(apiConfig.URL + "superadmin/user/?username=" + username, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,

      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const currentURL = window.location.href;
// Split the URL by '/'
export const segments = currentURL.split("/");
// Get the second segment (index 1)
// export const Tenantname = segments[segments.length > 3 ? 3 : 1].trim();

export const Tenantname = currentURL.split(".")[0].split("//")[1];

console.log("Tenantname:", Tenantname);

export const BASE_URL1 = `https://127.0.0.1:8000/${Tenantname}`;

export const BASE_URLIMAGE = `https://127.0.0.1:8000`;

export const BASE_URL = `https://backend.crmfarm.app/demo`;

export const Super_Admin_URL = `https://backend.crmfarm.in`;

export const BASE_URL2 = `https://3.85.209.92:8000/${Tenantname}`;

export default authService;
