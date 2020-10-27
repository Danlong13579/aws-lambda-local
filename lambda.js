exports.handler = async (event) => {
    //
    let res = {}
    let jsonBody = JSON.stringify({
        message: "API request approved",
        key1: "Data",
        key2: "Data"
    })

    if (event.httpMethod != null){

        res = {
            statusCode: 200,
            body: jsonBody
        }
        console.log(res)
        console.log(jsonBody)
        return res
    }
}