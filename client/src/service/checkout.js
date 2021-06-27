import axios from 'axios'

export const payment = async ({ data }) => {
  return await axios
    .post('http://localhost:8000/api/checkout', data)
    .then((response) => response.data)
}
