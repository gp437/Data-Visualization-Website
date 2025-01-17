"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// save tweets in the dynamodb
var database_function_1 = require("./database_function");
var dotenv = require("dotenv");
var Twitter = require("twitter");
dotenv.config();
var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
//Downloads and outputs tweet text
function searchTweets(keyword) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchParams = {
                        q: keyword,
                        count: 10,
                        lang: "en",
                    };
                    return [4 /*yield*/, client.get("search/tweets", searchParams)];
                case 1:
                    result = _a.sent();
                    console.log(JSON.stringify(result));
                    //Output the result
                    result.statuses.forEach(function (tweet) {
                        var tweetId = tweet.id;
                        var tweetText = tweet.text;
                        var date = Date.parse(tweet.created_at);
                        var unix = date.valueOf();
                        var time = unix;
                        var borough = cBorough;
                        database_function_1.saveData(time, tweetId, borough, tweetText);
                        // save tweets in database
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(JSON.stringify(error_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var b1 = "City of London";
var b2 = "barking & dagenham";
var b3 = " Barnet ";
var b4 = " Bexley";
var b5 = "Brent";
var b6 = " ";
var cBorough = b4;
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
//# sourceMappingURL=tweeter.js.map