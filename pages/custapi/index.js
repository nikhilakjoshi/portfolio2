import axios from 'axios'

axios.defaults.baseURL =
  'https://vz1rnsxznh.execute-api.ap-south-1.amazonaws.com/dev'

export const sendQuery = ({ name, email, services }) => {
  return axios
    .post('/sendmail', {
      name: name,
      email: email,
      services: services,
    })
    .then((resp) => resp.data)
}
