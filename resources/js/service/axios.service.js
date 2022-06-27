import axios from "axios";

axios.defaults.baseURL = process.env.MIX_SPA_URL;

window.axios = axios;
