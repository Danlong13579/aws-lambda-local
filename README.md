﻿<h1 align="center"> AWS Serverless API with Lambda </h1> <br>
    <p align="center">
        <a href="https://aws.amazon.com/?nc2=h_lg">
        <img alt="AWS" title="AWS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/580px-AmazonWebservices_Logo.svg.png" width="450">
    </a>
</p>

![GitHub All Releases](https://img.shields.io/github/downloads/Danlong13579/aws-lambda-local/total?color=lightgreen&label=Downloads&logo=github)  ![](https://img.shields.io/badge/AWS-Lambda-brightgreen?style=flat&logo=amazon-aws)  ![](https://img.shields.io/badge/Payload-Query%20String%20Parameters-brightgreen?style=flat&logo=json)

## Getting Started
If you want to start building lambda functions for AWS on your local machine simply download this repo and start playing with the data comming through your **event.json** file.  
I built this project by logging the event and context in AWS lambda. I used postman to hit the API and look at the return body. 

```javascript
const res = {
    statusCode: 200,
    body: JSON.stringify({
        event: event,
        context: context
    }),
};
return res;
```  

You can then copy your event data and context data into each file **event.json** and **context.json**. or use / edit the ones I have provided, most of the keys have been null'ed out

## index.js
This file is set up to call your lambda and pass in the event and context.  
Here we are simulating a GET, POST, or what ever request you plan to make.  

##### Run the following in your **Terminal** to test.

```Bash
node index.js
```


## lambda.js
This is where you build your lambda, add in your functional code here and make sure you are returning the responce.  

Here are a list of status code for your return body, make sure you supplying the correct [Status Codes](https://restfulapi.net/http-status-codes/)

```javascript
exports.handler = async (event, context) => {
    
    //checking that request type is not empty GET POST PUT DELETE etc.
    if(event.httpMethod != null){
        
        //JSON Object we will return
        let res = {
            //status Codes https://restfulapi.net/http-status-codes/
            statusCode: 200,
            //Return data for the user
            body: JSON.stringify({
                RequestTpye: event["httpMethod"]
            }),
        }
        //Logging so we can see the return data localy
        console.log(res)
        return res
    }
}
```

## event.json
I use postman to hit my endpoint and add params. These params get added to the event. all you have to do is access and use them.  

These values are case sensitive, I personally use Regex to get around this.  
##### JavaScript to access the param values
```Javascript
let eventData1 = event["queryStringParameters"]["param1"] //value = "Hello"
let eventData2 = event["queryStringParameters"]["param2"] //value = "World"
```
##### Section of the event.json where values are stored
```Json
"queryStringParameters": {
        "param1": "Hello",
        "param2": "World"
    }
```

## context.json
```json
{
    "callbackWaitsForEmptyEventLoop": true,
    "functionVersion": null,
    "functionName": null,
    "memoryLimitInMB": null,
    "logGroupName": null,
    "logStreamName": null,
    "invokedFunctionArn": null,
    "awsRequestId": null
}
```
