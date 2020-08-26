
//Axios will handle HTTP requests to web service
const axios = require('axios');

//The ID of the student's data that I will download
let studentID = 'm00618169';

//URL where student data is available
let url = 'https://wi02tm8hpe.execute-api.us-east-1.amazonaws.com/dev/M00618169';
// 'https://m3ijbzm7a4.execute-api.us-east-1.amazonaws.com/dev/';
// 'https://m3ijbzm7a4.execute-api.us-east-1.amazonaws.com/dev/';

//Authentication details for Plotly
//ADD YOUR OWN AUTHENTICATION DETAILS
const PLOTLY_USERNAME = 'pislargabriel27';
const PLOTLY_KEY = 'eZKzp3EsxUYuDQPMQddN';

//Initialize Plotly with user details.
let plotly = require('plotly')(PLOTLY_USERNAME, PLOTLY_KEY);

exports.handler = async (event) => {
    try {
        //Get synthetic data
        let yValues = (await axios.get(url)).data.target;

        //Add basic X values for plot
        let xValues = [];
        for (let i = 0; i < yValues.length; ++i) {
            xValues.push(i);
        }

        //Call function to plot data
        let plotResult = await plotData(studentID, xValues, yValues);
        console.log("Plot for student '" + studentID + "' available at: " + plotResult.url);

        return {
            statusCode: 200,
            body: "Ok"
        };
    }
    catch (err) {
        console.log("ERROR: " + JSON.stringify(err));
        return {
            statusCode: 500,
            body: "Error plotting data for student ID: " + studentID
        };
    }
};

//Plots the specified data
async function plotData(studentID, xValues, yValues) {
    //Data structure
    let studentData = {
        x: xValues,
        y: yValues,
        type: "scatter",
        mode: 'line',
        name: studentID,
        marker: {
            color: 'rgb(219, 64, 82)',
            size: 12
        }
    };
    let data = [studentData];

    let layout = {
        title: "Synthetic Data for Student " + studentID,
        font: {
            size: 25
        },
        xaxis: {
            title: 'Time (hours)'
        },
        yaxis: {
            title: 'Value'
        }
    };
    let graphOptions = {
        layout: layout,
        filename: "date-axes",
        fileopt: "overwrite"
    };

    return new Promise((resolve, reject) => {
        plotly.plot(data, graphOptions, function (err, msg) {
            if (err)
                reject(err);
            else {
                resolve(msg);
            }
        });
    });
};

exports.handler({});