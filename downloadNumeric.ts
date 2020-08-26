import fs = require("fs");
import { HttpClient } from "typed-rest-client/HttpClient";
async function run() {
    const client = new HttpClient("clientTest");
    const response = await client.get("https://data.london.gov.uk/download/uk-house-price-index/70ac0766-8902-4eb5-aab5-01951aaed773/UK%20House%20price%20index.xlsx");
    const filePath = "\housePrices.xlsx";
    const file: NodeJS.WritableStream = fs.createWriteStream(filePath);
    
    if (response.message.statusCode !== 200) {
        const err: Error = new Error(`Unexpected HTTP response: ${response.message.statusCode}`);
        err["httpStatusCode"] = response.message.statusCode;
        throw err;
    }
    return new Promise((resolve, reject) => {
        file.on("error", (err) => reject(err));
        const stream = response.message.pipe(file);
        stream.on("close", () => {
            try { resolve(filePath); } catch (err) {
                reject(err);
            }
        });
    });
}
run();