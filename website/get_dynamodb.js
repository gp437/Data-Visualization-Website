
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var fs_1 = require("fs");
var GetDemo;



var idd = 1;
let boroughX = ["Barking & Dagenham", "Barnet", "Bexley", "Brent", "City of London"];
let boroughY;
function BoroughFunc() {
    var NumericalData = [];

    for (let x = 0; x < 1506; x++) {

        let id = x;
        // end id
        for (let y = 0; y < 6; y++) {
            boroughY = boroughX[y - 1];



            (function (GetDemo) {
                var AWS = require("aws-sdk");
                AWS.config.update({
                    region: "us-east-1",
                    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
                });
                //Create new DocumentClient
                var documentClient = new AWS.DynamoDB.DocumentClient();
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
                        //  dbData.push(data);
                        //  console.log(dbData);

                        // dbData.push(JSON.stringify(data.Item));
                        if (data.Item != undefined) {
                            // console.log("Able to read item + defined");
                            NumericalData.push(data.Item.borough, data.Item.price, data.Item.date);
                            // xPrice.push(data.Item.price);
                            // xDate.push(data.Item.date);
                            // console.log(data.Item.date);
                            // if (x > 15) {
                            // console.log(xDate);
                            // console.log(xBorough);
                            // console.log(xPrice);
                            // };

                        }
                        // console.log(data.Item.date);

                    }
                });
            })(GetDemo || (GetDemo = {}));
            //# sourceMappingURL=get_demo.js.map

        };
        //for1

    };
    //for2




}
BoroughFunc();

















// //   //Data set details. Each trace corresponds to one line or set of points.
// let trace1 = {
//     x: xDate,
//     y: [50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000],
//     mode: 'markers',
//     name: "First data set",
//     marker: {
//         color: 'rgb(219, 64, 82)',
//         size: 12
//     }
// };


// //Complete data set for graph
// let data = [trace1];

// //Specify title and axis labels
// let layout = {
//     title: 'House Prices Average',
//     xaxis: {
//         title: 'Date'
//     },
//     yaxis: {
//         title: 'Price'
//     }
// };


//Draw graph
// Plotly.newPlot('chartDiv', data, layout);

