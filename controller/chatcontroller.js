// Importing model
const Chat = require('../model/chat');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createChat = async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        res.status(200).json(chat);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.findAll();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve chats" });
    }
};

module.exports = { createChat, getChat, getAllChats };