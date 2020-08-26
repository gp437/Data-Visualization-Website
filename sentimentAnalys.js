let AWS = require("aws-sdk");

//Text with positive sentiments about Z
let positiveText = "CSD3205 is a great course. I really love CSD3205. CSD3205 is fantastic.";

//Text with negative sentiments about CSD3205
let negativeText = "CSD3205 is awful. I really hate CSD3205. CSD3205 is terrible.";

//Parameters for call to AWS Comprehend
let params = {
    LanguageCode: "en",
    Text: positiveText
};

//Create instance of Comprehend
let comprehend = new AWS.Comprehend();

//Function that will be called
exports.handler = (event) => {
    //Call comprehend to detect sentiment of text
    comprehend.detectSentiment(params, (err, data) => {
        //Log result or error
        if (err) {
            console.log("\nError with call to Comprehend:\n" + JSON.stringify(err));
        }
        else {
            console.log("\nSuccessful call to Comprehend:\n" + JSON.stringify(data));
        }
    });
};


