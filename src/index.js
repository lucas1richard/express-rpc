import express from 'express';
import functions from './functions/index';

const app = express();

app.get('/functions/:func', async (req, res, next) => {
  const { func } = req.params;
  const toRun = functions[func];
  if (!toRun) {
    return res.sendStatus(404);
  }
  const response = await toRun({ haha: 'test' });
  await res.json(response);
});

app.listen(3002, 'localhost', () => {
  console.log('listening..');
});