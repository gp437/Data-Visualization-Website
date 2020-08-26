"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  put method to store data
var put_1 = require("./put");
// use read-exel-file node package to read xlxs file
function readPriceData() {
    var readXlsxFile = require("read-excel-file/node");
    // file to be used
    readXlsxFile("housePrices.xlsx");
    // passing sheet that needs to be read
    readXlsxFile("housePrices.xlsx", { sheet: "Average price", cols: 1 }).then(function (data) {
        var Boroughs = data[0];
        var numBoroughs = 5;
        var numDates = data.length - 2;
        var dates = data[-1];
        console.log(Boroughs);
        // variables
        var date;
        var borough;
        var price;
        for (var datestart = 2; datestart < numDates + 2; datestart++) {
            // City of London
            date = data[datestart][0];
            borough = "City of London";
            price = data[datestart][1];
            put_1.storeData(date.toString(), borough, price);
            // Barking & Dagenham
            borough = "Barking & Dagenham";
            price = data[datestart][2];
            put_1.storeData(date.toString(), borough, price);
            // Barnet
            borough = "Barnet";
            price = data[datestart][3];
            put_1.storeData(date.toString(), borough, price);
            // Bexley
            borough = "Bexley";
            price = data[datestart][4];
            put_1.storeData(date.toString(), borough, price);
            // Brent
            borough = "Brent";
            price = data[datestart][5];
            put_1.storeData(date.toString(), borough, price);
        }
    });
}
// call function
readPriceData();
//# sourceMappingURL=saveData.js.map