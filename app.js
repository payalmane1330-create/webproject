const express = require("express");
const app = express();

// Environment config
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

// App details
const appInfo = {
    name: "Advanced Deployment App",
    version: "1.0.0",
    author: "Payal Mane"
};

// Logging middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Application Deployed Successfully");
});

// Status route
app.get("/status", (req, res) => {
    res.json({
        status: "running",
        environment: NODE_ENV
    });
});

// Info route
app.get("/info", (req, res) => {
    res.json(appInfo);
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route Not Found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Mode: ${NODE_ENV}`);
});