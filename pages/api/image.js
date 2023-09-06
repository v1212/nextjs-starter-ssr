export default async (req, res) => {
  const imageBuffer = await fetch('https://source.unsplash.com/random/800x600').then((res) => res.buffer());
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpeg');
  res.end(imageBuffer);
};
