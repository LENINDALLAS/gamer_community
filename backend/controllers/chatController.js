const Chat = require('../models/chatModel');

exports.getAllChats = async (req, res) => {
    try {

        const chats = await Chat.find();

        res.status(200).json({
            status: "success",
            data: chats,
        });
    } catch (error) {
        res.status(404).json({ 
            status: "failed",
            message: error.message });
    }
}

exports.createChat = async (req, res) => {
    try {

        const chat = {
            chatType: req.body.chatType,
            message: req.body.message,
            owner: req.body.owner,
        }

        const doc = await Chat.create(chat);

        res.status(200).json({
            status: "success",
            data: doc
        });
    } catch (error) {
        res.status(404).json({ 
            status: "failed",

            message: error.message });
    }
}

