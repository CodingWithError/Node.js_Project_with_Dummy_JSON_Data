const express = require('express');
const path = require('path');
const dataRoutes = require('./routes/dataRoutes');
const fetchData = require('./utils/fetchData');
const config = require('./config');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/data', dataRoutes);

async function initializeData() {
  try {
    await fetchData();
    console.log('Data initialized successfully');
  } catch (error) {
    console.error('Failed to initialize data:', error);
    process.exit(1);
  }
}

async function startServer() {
  await initializeData();
  
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

startServer();

module.exports = app;