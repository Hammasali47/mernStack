const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))




const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.use('/d',require('./routes/video.js'));
app.listen(PORT , () => console.log(`Server started on port ${PORT}`));



