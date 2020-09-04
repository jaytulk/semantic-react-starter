import defaultAxios from '../utilities/axiosInstances';

const usersService = {
    fetchUsers: async () => {
        try {
            const response = await defaultAxios.get('users');

            return response.data;
        } catch (error) {
            console.error('Error', error);
        }
    },
};

export default usersService;
