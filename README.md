# 🚀 Node.js Data API: Your Gateway to Dummy JSON

Welcome to the Node.js Data API project! This API fetches dummy JSON data, stores it locally, and provides a flexible interface for accessing, filtering, and sorting the data.

## 🌟 Features

- 📥 Fetches external data and stores it locally
- 🛠️ Creates a RESTful API with Express
- 🔍 Implements advanced data filtering and sorting
- 🛡️ Robust error handling and input validation
- 🚦 Efficient query parameter processing

## 🏗️ Project Architecture
📁 src
├── 📄 app.js                 # Main entry point
├── 📄 config.js              # Configuration settings
├── 📁 routes
│   └── 📄 dataRoutes.js      # API route definitions
├── 📁 controllers
│   └── 📄 dataController.js  # Route logic handlers
├── 📁 services
│   └── 📄 dataService.js     # Data management
├── 📁 utils
│   └── 📄 fetchData.js       # Utility functions for data fetching process
├── 📁 data
│   └── 📄 dummyData.json     # Stored fetched data
└── 📄 .env                   # Environment variables (create this file)

## 🚀 Getting Started

### Prerequisites

- Node.js (v12.0.0+)
- npm (v6.0.0+)

### 🛠️ Installation

1. Clone the repository:
git clone https://github.com/CodingWithError/Node.js_Project_with_Dummy_JSON_Data
cd dummy-json-api

2. Create a `.env` file in the root directory:
DATA_URL=https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json
PORT=3000

3. Install dependencies:
npm install

4. Start the server:
npm start

Your server is now running at `http://localhost:3000`! 🎉

## 🔍 API Usage

### 📊 Get Data: `GET /api/data`

Retrieve data with optional filtering and sorting.

#### Query Parameters:

- `filter` (optional): Filter data based on specific criteria. 
Format: `key1:value1,key2:value2`
Example: `filter=language:Hindi`

- `sort` (optional): Sort data based on a specific field. 
Format: `field:order`
Example: `sort=version:desc`

#### 📊 Example Requests:

1. Get all data: `/api/data`
2. Filter data: `/api/data?filter=language:Sindhi`
3. Sort data: `/api/data?sort=version:desc`
4. Filter and sort: `/api/data?filter=language:Sindhi&sort=id:desc`

## 🛡️ Error Handling

Our API provides detailed error messages for various scenarios:

- Unrecognized query parameters
- Invalid filter format
- No matching items
- Invalid sort format

## 🚀 Performance Optimizations

- Data stored locally in JSON format for quick access
- Efficient in-memory filtering and sorting

## 📸 Postman Collection

1. Get all data: `/api/data`
- http://localhost:3000/api/data
![alt text](<Screenshot 2024-07-31 012002.png>)

2. Filter data: `/api/data?filter=language:Sindhi`
- http://localhost:3000/api/data?filter=language:Sindhi
![alt text](<Screenshot 2024-07-31 012134.png>)

3. Sort data: `/api/data?sort=version:desc`
- http://localhost:3000/api/data?sort=version:desc
![alt text](<Screenshot 2024-07-31 012224.png>)

4. Filter and sort: `/api/data?filter=language:Sindhi&sort=id:desc`
- http://localhost:3000/api/data?filter=language:Sindhi&sort=id:desc
![alt text](<Screenshot 2024-07-31 012254.png>)