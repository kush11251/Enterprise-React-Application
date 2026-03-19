import User from '../models/User';
const UserAdapter = {
  async getUser(id) {
    const response = await axios.get(`https://api.example.com/users/${id}`);
    return new User(response.data.id, response.data.name, response.data.email);
  }
};
export default UserAdapter;