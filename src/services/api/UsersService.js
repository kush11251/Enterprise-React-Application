import axios from 'axios';
const UsersService = {
  async getAllUsers() {
    const response = await axios.get('https://api.example.com/users');
    return response.data;
  }
};
export default UsersService;