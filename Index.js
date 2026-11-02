const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.status(200).type("html").send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Protected</title>
      <style>
        body {
          background: #0b0b0d;
          color: #e5e5e5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          font-family: monospace;
          text-align: center;
        }
        h1 { font-size: 1.25rem; }
        p { color: #8c8c8e; }
      </style>
    </head>
    <body>
      <h1>This file is protected.</h1>
      <p>This endpoint does not expose source code.</p>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "online" });
});

app.use((req, res) => {
  res.status(404).type("text/plain").send("Not found.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
