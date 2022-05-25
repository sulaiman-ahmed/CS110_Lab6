const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    roomName: {
        type: String,
        required: true
    }
})

module.exports = Item = mongoose.model('messaged', MessageSchema);
