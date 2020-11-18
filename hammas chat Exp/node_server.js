const express = require('express');
const connectDB = require('./config');
const connectSocket = require('./sockets');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded());

connectDB();
connectSocket();
app.use(cors());

app.use(express.json({ extended: false }));

app.get('/', (res) => res.send("Running...."))
app.use('/chat', require('./routes/chat'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Server Starting on port: ${PORT}`));
