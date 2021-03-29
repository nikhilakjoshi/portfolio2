// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

axios.defaults.baseURL =
  'https://vz1rnsxznh.execute-api.ap-south-1.amazonaws.com/dev'

export default (req, res) => {
  if (req.method == 'POST') {
    const { name, email, services } = req.body
    return new Promise((resolve, rej) => {
      axios
        .post('/sendmail', {
          name,
          email,
          services,
        })
        .then(() => {
          res.status(200).send('Success')
          resolve()
        })
        .catch((e) => {
          console.log(e)
          res.status(200).send('Success')
          resolve()
        })
    })
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}
