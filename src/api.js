import axios from "axios";

// call the api
const otherApi = axios.create({
    baseURL: "https://api.unsplash.com/",
    params: {
        client_id: "r-ZzHz6OnqIJqU0kQcnIO4Xcps636gLnvXL6AqDsijk",
    }
});

export const imgApi = {
    search: (term) => 
    otherApi.get("/search/photos", {
        params: {
            query: encodeURIComponent(term),
            per_page: 20,
        }
    })
}