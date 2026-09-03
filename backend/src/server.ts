import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'FlowDesk API is running',
  });
});

app.listen(PORT, () => {
  console.log(`FlowDesk API running on http://localhost:${PORT}`);
});
