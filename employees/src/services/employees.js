import axios from 'axios';
export default class EmployeesService {
  url = 'http://localhost:3000/people';

  getAllEmployees = async () => {
    let result = await axios.get(this.url);
    let data = result.data;
    return data;
  };
}
