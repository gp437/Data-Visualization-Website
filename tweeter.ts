// save tweets in the dynamodb
import { saveData } from "./database_function";
const dotenv = require("dotenv");
const Twitter = require("twitter");
dotenv.config();
let client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

//Downloads and outputs tweet text
async function searchTweets(keyword: string) {
  try {
    //Set up parameters for the search
    let searchParams = {
      q: keyword,
      count: 10,
      lang: "en",
    };

    //Wait for search to execute asynchronously
    let result = await client.get("search/tweets", searchParams);
    console.log(JSON.stringify(result));

    //Output the result
    result.statuses.forEach((tweet) => {
      let tweetId = tweet.id;
      let tweetText = tweet.text;
      let date = Date.parse(tweet.created_at);
      let unix: number = date.valueOf();
      let time: number = unix;
      let borough: string = cBorough;

      saveData(time, tweetId, borough, tweetText);
      // save tweets in database
    });
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}
let b1: string = "City of London";
let b2: string = "barking & dagenham";
let b3: string = " Barnet ";
let b4: string = " Bexley";
let b5: string = "Brent";
let b6: string = " ";
let cBorough = b4;
// searchTweets(cBorough + " house prices ");
// cBorough = b2;
// searchTweets(cBorough + " house prices ");
// cBorough = b3;
// searchTweets(cBorough + " house prices ");
// cBorough = b4;
// searchTweets(cBorough + " house prices ");
// cBorough = b5;
// searchTweets(cBorough + " house prices ");

//Call function to search for tweets with specified subject
searchTweets("Living " + cBorough);
