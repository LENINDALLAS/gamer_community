const express = require('express');
const { getAllChats, createChat } = require('../controllers/chatController');

const router = express.Router();

router.route("/chat").get(getAllChats).post(createChat);

module.exports = router;