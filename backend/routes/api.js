import express from 'express';
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: 'Here is some data' });
});

export default router;