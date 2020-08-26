//  put method to store data
import { storeData } from "./put";
// use read-exel-file node package to read xlxs file
function readPriceData() {
  const readXlsxFile = require("read-excel-file/node");
  // file to be used
  readXlsxFile("housePrices.xlsx");
  // passing sheet that needs to be read
  readXlsxFile("housePrices.xlsx", { sheet: "Average price", cols: 1 }).then(
    (data) => {
      let Boroughs = data[0];
      let numBoroughs = 5;
      let numDates = data.length - 2;
      let dates = data[-1];
      console.log(Boroughs);

      // variables
      let date: string;
      let borough: string;
      let price: number;

      for (let datestart = 2; datestart < numDates + 2; datestart++) {
        // City of London
        date = data[datestart][0];
        borough = "City of London";
        price = data[datestart][1];
        storeData(date.toString(), borough, price);
        // Barking & Dagenham
        borough = "Barking & Dagenham";
        price = data[datestart][2];
        storeData(date.toString(), borough, price);
        // Barnet
        borough = "Barnet";
        price = data[datestart][3];
        storeData(date.toString(), borough, price);
        // Bexley
        borough = "Bexley";
        price = data[datestart][4];
        storeData(date.toString(), borough, price);
        // Brent
        borough = "Brent";
        price = data[datestart][5];
        storeData(date.toString(), borough, price);
      }
    }
  );
}
// call function
readPriceData();
