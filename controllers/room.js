// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const messages = require('../models/Messages');

// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    messages.find().lean().then(items => {
        response.render('room', {messages: items, isAvailable: true, roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
      });
    // response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
}

module.exports = {
    getRoom
};