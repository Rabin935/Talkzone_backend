// Importing model
const GroupMember = require('../model/groupmember');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const addGroupMember = async (req, res) => {
    try {
        const groupMember = await GroupMember.create(req.body);
        res.status(201).json(groupMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getGroupMembers = async (req, res) => {
    try {
        const members = await GroupMember.findAll({ where: { groupId: req.params.groupId } });
        res.status(200).json(members);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllGroupMembers = async (req, res) => {
    try {
        const members = await GroupMember.findAll();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve group members" });
    }
};

module.exports = { addGroupMember, getGroupMembers, getAllGroupMembers };