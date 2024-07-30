const dataService = require('../services/dataService');

exports.getData = async (req, res) => {
  try {
    const { filter, sort } = req.query;
    const data = await dataService.getData(filter, sort);
    res.json(data);
  } catch (error) {
    console.error('Error in getData controller:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};