
var idd = 1;
let boroughX = ["Barking & Dagenham", "Barnet", "Bexley", "Brent", "City of London"];
let boroughY;

var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
//Create new DocumentClient
var documentClient = new AWS.DynamoDB.DocumentClient();
var NumericalData = [];


function BoroughFunc() {

    //1506
    for (let x = 0; x < 1506; x++) {
        let id = x;
        // end id
        for (let y = 0; y < 6; y++) {
            boroughY = boroughX[y - 1];



            // function GetDemo() {

            //Table name and data for table
            var params = {
                TableName: "HousesAverage",
                Key: {
                    id: id,
                    borough: boroughY
                }
            };
            //Retrieve data item from DynamoDB and handle errors
            documentClient.get(params, function (err, data) {
                if (err) {
                    // console.error("Unable to read item");
                    // console.error("Error JSON:", JSON.stringify(err));
                }
                else {
                    if (data.Item != undefined) {
                        // console.log("Able to read item + defined");
                        NumericalData.push(data.Item.borough, data.Item.price, data.Item.date);
                        // console.log(NumericalData);
                    };


                }
            });

        };
        //for1
    };
    //for2
};


BoroughFunc();























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
        // let NumericalData = [1, 2, 3];
        //Send message to all connected clients
        broadcast(NumericalData);
    });
});

//Broadcasts message to all connected clients
function broadcast(message) {
    webSocketServer.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            message = JSON.stringify(message);
            client.send(message);
        }
    });
}








