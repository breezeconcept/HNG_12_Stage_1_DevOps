# Number Classification API

## Overview
The **Number Classification API** is a RESTful API that takes a number as input and returns interesting mathematical properties about it, including:
- **Prime check**
- **Armstrong number check**
- **Odd or Even classification**
- **Sum of digits**
- **Fun fact from Numbers API**

This API is built with **Node.js** and **Express.js**, and is publicly accessible.

## Features
✅ Accepts **GET** requests with a number parameter  
✅ Returns **JSON responses** in the specified format  
✅ Provides appropriate **HTTP status codes**  
✅ Includes **CORS support**  
✅ Fetches a **fun fact** from the Numbers API  
✅ Includes **error handling** for invalid inputs  

---

## API Specification

### **Endpoint:**
```
GET /api/classify-number?number=<value>
```

### **Example Request:**
```
GET /api/classify-number?number=371
```

### **Successful Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### **Error Response (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

---

## Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the API Server**
```sh
node server.js
```

The server will start on **http://localhost:3000**.

---

## Deployment
The API is publicly accessible at:
```
<your-deployed-url>/api/classify-number?number=371
```

### **Steps to Deploy** (Example: Render/Vercel/Railway)
1. Push the code to GitHub.
2. Connect the repository to your chosen deployment platform.
3. Set the `PORT` environment variable (default: **3000**).
4. Deploy and test the API.

---

## Technology Stack
- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **Axios** (HTTP client for fetching fun facts)
- **CORS** (Handling cross-origin requests)
- **Dotenv** (Environment variable management)

---

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Added new feature"`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License
This project is open-source and available under the **MIT License**.

---

## Contact
For any questions or issues, feel free to reach out:
- **GitHub:** [your-username](https://github.com/your-username)
- **Email:** your-email@example.com

---
🚀 **Happy Coding!** 🚀

