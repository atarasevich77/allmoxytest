import axios from 'axios';

export default {
    getAll: async () => {
        const res = await axios.get(`/api/product`);
        return res.data || [];
    },
    createProduct: async (product) => {
        await axios.post(`/api/product`, product);
    },
    deleteProduct: async (id) => {
        await axios.delete(`/api/product/${id}`);
    }
}