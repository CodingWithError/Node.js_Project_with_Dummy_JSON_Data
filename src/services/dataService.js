const fs = require('fs').promises;
const path = require('path');

class DataService {
  constructor() {
    this.dataPath = path.join(__dirname, '../data/dummyData.json');
    this.data = null;
  }

  async loadData() {
    if (this.data) return this.data;

    try {
      const rawData = await fs.readFile(this.dataPath, 'utf8');
      this.data = JSON.parse(rawData);
      return this.data;
    } catch (error) {
      console.error('Error loading data:', error);
      throw error;
    }
  }

  async getData(filter, sort) {
    let data = await this.loadData();

    if (filter) {
      const [field, value] = filter.split(':');
      data = data.filter(item => item[field] && item[field].toString().toLowerCase() === value.toLowerCase());
    }

    if (sort) {
      const [field, order] = sort.split(':');
      data = [...data].sort((a, b) => {
        if (a[field] < b[field]) return order === 'desc' ? 1 : -1;
        if (a[field] > b[field]) return order === 'desc' ? -1 : 1;
        return 0;
      });
    }

    return data;
  }
}

module.exports = new DataService();