import axios from "axios"
import { toast } from "react-toastify"


const fetchCategoryWiseProduct = async (category) => {
    try {
        const response = await axios.post(
            "https://mern-electronice-ecommerce-dec2024-deploy-ntyz.vercel.app/api/category-product",
            { category }, // Pass category in the request body
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data
    } catch (error) {
        toast(error?.response?.data?.message || "Something went wrong!");
    }
};

export default fetchCategoryWiseProduct;
