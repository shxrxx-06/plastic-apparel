const express = require("express");
const cors = require("cors"); // Add this line

const app = express();
app.use(cors()); // Add this line

app.use(express.json());

// Routes and other middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
