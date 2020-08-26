const WebSocket = require('ws');

//Create WebSocket server object
const webSocketServer = new WebSocket.Server({ port: 8080 });

//Handle new connection to web socket server
webSocketServer.on('connection', ws => {
    console.log("Client connected");

    //Set up handlers for new connection
    ws.on('message', message => {
        //Log received message
        console.log('Message received: ' + message);

        //Send message to all connected clients
        broadcast("asdasdasdasda");
    });
});

//Broadcasts message to all connected clients
function broadcast(message) {
    webSocketServer.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

