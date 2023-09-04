// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('<h1>Hello, World!</h1>');
}
