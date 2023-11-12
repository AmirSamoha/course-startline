const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";
const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;

// app.post("/search", async (req, res) => {
//   const { q } = req.body;
//   console.log(q)
//   const apiUrl = `${basicUrl}&q=${q}&image_type=photo`;

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`Server responded with ${response.status}`);
//     }

//     const data = await response.json();
//     //console.log(data)
//     return res.json(data);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.get("/random-images", async (req, res) => {
  const url = `${basicUrl}&order=popular`;
  try {
    const response = await fetch(url);
    
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
