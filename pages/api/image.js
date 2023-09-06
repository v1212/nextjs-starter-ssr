import axios from 'axios'

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://picsum.photos/200')
    const imageContent = response.data.toString('base64')

    res.status(200).send({
      headers: {
        'Content-Type': 'image/jpeg'
      },
      body: imageContent
    })
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting image')
  }
}
