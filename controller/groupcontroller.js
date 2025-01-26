// Importing model
const Group = require('../model/group');

const createGroup = async (req, res) => {
    try {
        const group = await Group.create(req.body);
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getGroup = async (req, res) => {
    try {
        const group = await Group.findByPk(req.params.id);
        res.status(200).json(group);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve groups" });
    }
};

module.exports = { createGroup, getGroup, getAllGroups };