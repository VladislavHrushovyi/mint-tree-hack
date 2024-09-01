import axios from "axios";

export const mintAxois = axios.create({
    baseURL: "https://www.mintchain.io/mint-forest",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
    }
})