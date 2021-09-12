import axios from 'axios';

const getUsers = () => (
  axios.get('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
)
export default getUsers;