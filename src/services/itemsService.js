import defaultAxios from '../utilities/axiosInstances';

const itemsService = {
    fetchItems: async () => {
        try {
            const response = await defaultAxios.get('items');

            return response.data;
        } catch (error) {
            console.error('Error', error);
        }
    },
};

export default itemsService;
