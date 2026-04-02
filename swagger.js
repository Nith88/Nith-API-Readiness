const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0"
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? "https://your-app.onrender.com"
          : "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);