require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dataUrl: process.env.DATA_URL
};