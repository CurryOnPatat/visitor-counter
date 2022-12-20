import express from 'express';
import fs from 'fs';
import cors from 'cors';
const app = express();

app.use(cors());

let counter = 0;
if (fs.existsSync('./counter.txt')) {
  counter = parseInt(fs.readFileSync('./counter.txt', 'utf-8'));
}

app.get('/counter', (req, res) => {
  counter++;
  fs.writeFileSync('./counter.txt', String(counter));
  return res.status(200).json({ res: counter });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});