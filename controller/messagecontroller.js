// Importing model
const Message = require('../model/message');

const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getMessage = async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve messages" });
    }
};

module.exports = { createMessage, getMessage, getAllMessages };