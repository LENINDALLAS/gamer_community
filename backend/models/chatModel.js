const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    chatType: {
        type: String,
        default: 'chat',
        enum: ['chat', 'queries', 'flagged']
    },
    message: String,
    owner: String,
},
{
    timestamps: true
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;