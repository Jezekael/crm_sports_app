// server.js (Node.js/Express)

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:12345@cluster0.drtzyph.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

// Define a schema and model for your MongoDB collection
const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const ExampleModel = mongoose.model('example', exampleSchema);

// Create API endpoint for fetching examples
app.get('/api/examples', async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3001, () => console.log('Server is running on port 3001'));
