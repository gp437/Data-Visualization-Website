console.log(";,~Locz{#ZTOH#!dwE1#" === ";,~Locz{#ZTOH#!dwE1#")
// console.log('Loading function');
// let global = {};

// exports.handler = async (event, context) => {
//     //console.log('Received event:', JSON.stringify(event, null, 2));
//     for (const record of event.Records) {
//         console.log(record.eventID);
//         console.log(record.eventName);
//         console.log('DynamoDB Record: %j', record.dynamodb);
        
//         let tweetTimestamp = record.dynamodb.NewImage.timeStamp.N;
//         let tweetID = record.dynamodb.NewImage.id.N;
//         let tweetText = record.dynamodb.NewImage.text.S;
//         let tweetBorough = record.dynamodb.NewImage.borough.S;

//         let params = {
//             languageCode: "en",
//             Text : global.tweetText
//         };
//        let result = await comprehend.detectSentiment(params).promise();
//        console.log(JSON.stringify(result));

//         //EXTRACT DATA FROM EVENT
//         //GET SENTIMENT
//         //STORE IND ATABASE
   
//     }
//     return `Successfully processed ${event.Records.length} records.`;
// };
// // end of loging trigger 

// // for loop in each text from tweeter
// for(let record of event.Records) {
//     let tweetTimestamp = record.dynamodb.NewImage.timeStamp.N;
//     let tweetID = record.dynamodb.NewImage.id.N;
//     let tweetText = record.dynamodb.NewImage.text.S;
//     let tweetBorough = record.dynamodb.NewImage.borough.S;
    
//     console.log (tweetTimestamp +tweetID + tweetText + tweetBorough);
     
//      let params = {
//          languageCode: "en",
//          Text : tweet
//      };
//     let result = await comprehend.detectSentiment(params).promise();
//     console.log(JSON.stringify(result));
// };








// // sentiment analyse from tweeter table
// let AWS = require("aws-sdk");
// //Text with positive sentiments about 
// let tweterText ;


// //Parameters for call to AWS Comprehend
// let params = {
//     LanguageCode: "en",
//     Text: tweterText 
// };

// //Create instance of Comprehend
// let comprehend = new AWS.Comprehend();

// //Function that will be called
// exports.handler = (event) => {
//     //Call comprehend to detect sentiment of text
//     comprehend.detectSentiment(params, (err, data) => {
//         //Log result or error
//         if (err) {
//             console.log("\nError with call to Comprehend:\n" + JSON.stringify(err));
//         }
//         else {
//             console.log("\nSuccessful call to Comprehend:\n" + JSON.stringify(data));
//         }
//     });
// };

















// // // get database text tweeter
// // var GetData;
// // (function (GetData) {
// //     var AWS = require("aws-sdk");
// //     //Set the region and endpoint
// //     // AWS.config.update({
// //     //     region: "eu-west-1",
// //     //     endpoint: "https://dynamodb.eu-west-1.amazonaws.com"
// //     // });
// //     AWS.config.update({
// //         region: "us-east-1",
// //         endpoint: "https://dynamodb.us-east-1.amazonaws.com"
// //     });
// //     //Create new DocumentClient
// //     var documentClient = new AWS.DynamoDB.DocumentClient();
// //     //Table name and data for table
// //     var params = {
// //         TableName: "Twitter",
// //         Key: {
// //             // id: 1547552396658,
// //             borough: "City of London"
// //         }
// //     };
// //     //Retrieve data item from DynamoDB and handle errors
// //     documentClient.get(params, function (err, data) {
// //         if (err) {
// //             console.error("Unable to read item", params.Key.borough);
// //             console.error("Error JSON:", JSON.stringify(err));
// //         }
// //         else {
// //             console.log("Data:", data);
// //         }
// //     });
// // })(GetData || (GetData = {}));






// // for loop in each text from tweeter
// // async function getSentiment(){
// //     for(let record of event.Records) {
// //         let tweetTimestamp = record.dynamodb.NewImage.timeStamp.N;
// //         let tweetID = record.dynamodb.NewImage.id.N;
// //         let tweetText = record.dynamodb.NewImage.text.S;
// //         let tweetBorough = record.dynamodb.NewImage.borough.S;
        
// //         console.log (tweetTimestamp +tweetID + tweetText + tweetBorough);
         
// //          let params = {
// //              languageCode: "en",
// //              Text : tweetText
// //          };
// //         let result = await comprehend.detectSentiment(params).promise();
// //         console.log(JSON.stringify(result));
// //     };
// // }
// // getSentiment();