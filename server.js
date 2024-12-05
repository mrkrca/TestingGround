  import bodyParser from "body-parser"; 
  import express from "express";
  import { dirname, join } from "path";
  import { fileURLToPath } from "url";
  import dotenv from "dotenv";
  import nodemailer from "nodemailer";
 

  dotenv.config();
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const app = express();
  const port = 3000;
  app.use(bodyParser.urlencoded({ extended: true }));

 
  app.use(express.json()); 
  app.use(express.static(join(__dirname, 'public')));
  app.use("/publicProjects/DiceGame", express.static(join(__dirname, 'publicProjects', 'DiceGame')));
  app.use("/publicProjects/SimonGame", express.static(join(__dirname, 'publicProjects', 'SimonGame')));
  app.use("/publicProjects/calculator", express.static(join(__dirname, 'PublicProjects', 'calculator')));
  
  

  app.get("/publicProjects/BlogApp/", (req, res) => {
    res.sendFile(join(__dirname, "publicProjects", "BlogApp", "views" ));
  });
  
  app.get("/publicProjects/DiceGame/", (req, res) => {
    res.sendFile(join(__dirname, "publicProjects", "DiceGame", "dicee.html"));
  });
  
  app.get("/publicProjects/SimonGame/", (req, res) => {
    res.sendFile(join(__dirname, "publicProjects", "SimonGame", "index.html"));
  });
  
  app.get("/publicProjects/calculator/", (req, res) => {
    res.sendFile(join(__dirname, "publicProjects", "calculator", "calculator.html"));
  });
  
  
  app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });
  
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "PORTFOLIO EMAIL",
      html: `<p>Full Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true }); 

     
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' }); 
    }
  });
  
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
  