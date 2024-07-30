const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const config = require('../config');

async function fetchData() {
  try {
    const response = await axios.get(config.dataUrl);
    let data = response.data;
    

    data.sort((a, b) => a.name.localeCompare(b.name));
    
    await fs.writeFile(
      path.join(__dirname, '../data/dummyData.json'),
      JSON.stringify(data, null, 2)
    );

    console.log('Data fetched, sorted, and stored successfully');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = fetchData;