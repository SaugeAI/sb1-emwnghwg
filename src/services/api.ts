import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/wp-json/wc/v3';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};