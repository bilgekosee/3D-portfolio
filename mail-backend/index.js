require("dotenv").config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Var ✅" : "Yok ❌");

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  console.log("📩 /send endpoint hit");
  const { name, email, message } = req.body;
  console.log("✉️ Email Request:", { name, email, message });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    console.log("📨 Mail gönderildi.");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("⛔ Email gönderme hatası:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app
  .listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server error:", err);
  });
