const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Lalit Cloud Project</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    text-align: center;
                }
                .container {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
                }
                h1 {
                    font-size: 42px;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 20px;
                }
                .highlight {
                    color: yellow;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Welcome to Our Cloud Project</h1>
                <p>Successfully deployed on <span class="highlight">AWS EC2</span></p>
                <p>CI/CD pipeline is working with <span class="highlight">GitHub Actions</span></p>
                <p>Built using <span class="highlight">Node.js + Nginx + PM2</span></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
