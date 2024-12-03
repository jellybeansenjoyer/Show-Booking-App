const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello, world! This is an Express server with dotenv and CORS.');
});

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
