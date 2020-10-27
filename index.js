const awsLambda = require('./lambda.js') 

//Edit the event or context JSON so simulate your API requests
const eventData = require('./event.json')
const contextData = require('./context.json')

awsLambda.handler(eventData, contextData)