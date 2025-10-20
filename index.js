const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const USER = {
  email: "user@netflix.com",
  password: "12345",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials!" });
  }
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
