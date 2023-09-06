import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const imageFilePath = path.join(process.cwd(), 'public', '1.png')
  const imageContent = fs.readFileSync(imageFilePath)

  res.setHeader('Content-Type', 'image/jpeg')
  res.send(imageContent)
}
