let AWS = require("aws-sdk");

//Set the region and endpoint
// AWS.config.update({
//     region: "eu-west-1",
//     endpoint: "https://dynamodb.eu-west-1.amazonaws.com"
// });
AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let idd = 1;
let id = idd++;

export function storeData(date: string, borough: string, price: number){

    // console.log("id" + id);



    //Create date object to get date in UNIX time
    //let date: Date = new Date();

    //Create new DocumentClient
    let documentClient = new AWS.DynamoDB.DocumentClient();

    //Table name and data for table
    let params = {
        TableName: "HousesAverage",
        Item: {
            // PriceTimeStamp: date.getTime(),//Current time in milliseconds
            id: id++,
            borough: borough,
            date: date,
            price: price
        }
    };

    //Store data in DynamoDB and handle errors
    documentClient.put(params, (err, data) => {
        if (err) {
            console.error("Unable to add item", params.Item.borough);
            console.error("Error JSON:", JSON.stringify(err));
        }
        else {
            console.log("Borough + price added to table:", params.Item);
        }
    });
}

