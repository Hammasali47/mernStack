const express = require('express');
const router = express.Router();
const http = require("http");
const url = require("url");
const Chat = require('../models/chat_model')

router.post('/', async (req, res) => {

    try {
        const message = req.body.messages;
        if (message) {
            let name = "Hamza"
            const chat = new Chat({ message, name });
            const msg = await chat.save();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('callback(\'{\"message\": \"OK\"}\'');
            console.log(msg);
        }
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/',
    async (req, res) => {
        const query = req.params.query
        try {
            const chat = await Chat.find({'request': query })
            if (!chat) return res.status(400).send("No Data")
            return res.json(chat);
        } catch (err) {
            res.status(500).send(`Error: ${err.message}`);
        }

    });

module.exports = router;