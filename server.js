const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD 101 with CircleCI</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            margin-top: 100px;
            background-color: #f0f0f0;
          }
          h1 { 
            color: #343A40; 
            font-size: 2.5em;
          }
          p {
            color: #6c757d;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to CI/CD 101 using CircleCI!</h1>
        <p>This is a Node.js application running in a Docker container.</p>
        <p>Learn more about <a href="https://circleci.com">CircleCI</a></p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
