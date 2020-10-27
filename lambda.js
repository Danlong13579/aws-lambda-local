exports.handler = async (event, context) => {
    
    //checking that request type is not empty GET POST PUT DELETE etc.
    if(event.httpMethod != null){
        let param1 = event["queryStringParameters"]["param1"]
        let param2 = event["queryStringParameters"]["param2"]
        
        //JSON Object we will return
        let res = {
            //status Codes https://restfulapi.net/http-status-codes/
            statusCode: 200,
            //Return data for the user
            body: JSON.stringify({
                RequestTpye: event["httpMethod"],
                message: `${param1} ${param2} from Daniel Long` 
            }),
        }
        //Logging so we can see the return data localy
        console.log(res)
        return res
    }
}