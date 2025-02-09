require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Utility functions
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

const getProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

// API Endpoint
// app.get("/api/classify-number", async (req, res) => {
//   const { number } = req.query;

//   if (!number || isNaN(number)) {
//     return res.status(400).json({
//       number,
//       error: true,
//     });
//   }

//   const num = parseInt(number, 10);
//   const properties = getProperties(num);
//   const digitSum = num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);

//   try {
//     // Fetch fun fact from Numbers API
//     const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
//     const funFact = funFactResponse.data.text;

//     res.json({
//       number: num,
//       is_prime: isPrime(num),
//       is_perfect: false, // Can be implemented later
//       properties,
//       digit_sum: digitSum,
//       fun_fact: funFact,
//     });
//   } catch (error) {
//     res.status(500).json({
//       number: num,
//       error: "Failed to fetch fun fact",
//     });
//   }
// });

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;
  
    if (!number || isNaN(number)) {
      return res.status(400).json({
        number,
        error: true,
      });
    }
  
    const num = parseInt(number, 10);
    const properties = getProperties(num);
    const digitSum = Math.abs(num) // Ensure negative numbers don't affect sum
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
    try {
      // Fetch fun fact from Numbers API
      const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
      const funFact = funFactResponse.data.text;
  
      res.json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: false,
        properties,
        digit_sum: digitSum, // Fixed calculation
        fun_fact: funFact,
      });
    } catch (error) {
      res.status(500).json({
        number: num,
        error: "Failed to fetch fun fact",
      });
    }
});
  

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
