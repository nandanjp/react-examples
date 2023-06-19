import axios from "axios";

export interface UnsplashResponse
{
    data: {
        results: {
            urls: {
                full: string;
                small: string;
            };
        }[];
    };
}

const searchImages = async (search?: string) =>
{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID UY3CYGzqcJDf0ufIeostS_tLlF_zDMGFWBOT7nRgQ80`
        },
        params: {
            query: search ?? "cars"
        }
    });
    return response;
};

export default searchImages;