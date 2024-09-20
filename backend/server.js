// Import required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for cross-origin requests
app.use(bodyParser.json());  // Parse incoming request bodies as JSON

// Example route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api', apiRoutes);

// API route example
app.post('/api/data', (req, res) => {
  const data = req.body;  // Extract the data sent in the POST request
  res.json({ message: 'Data received successfully', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});