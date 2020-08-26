"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
//Configure AWS
AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
//Create new DocumentClient
var documentClient = new AWS.DynamoDB.DocumentClient();
/* Function returns a Promise that will save the text with the specified id. */
function saveData(time, tweetId, borough, tweetText) {
    //Table name and data for table
    var params = {
        TableName: "Twitter",
        Item: {
            timeStamp: time,
            id: tweetId,
            borough: borough,
            text: tweetText,
        }
    };
    //Store data in DynamoDB and handle errors
    return new Promise(function (resolve, reject) {
        documentClient.put(params, function (err, data) {
            if (err) {
                reject("Unable to add item: " + JSON.stringify(err));
            }
            else {
                resolve("Item added to table with id: " + tweetId);
            }
        });
    });
}
exports.saveData = saveData;
//# sourceMappingURL=database_function.js.map