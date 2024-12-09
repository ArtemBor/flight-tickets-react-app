
// parameters - объект параметров или undefined
// {
//     param1: value1
//     param2: value2
// }
export async function makeRequest (endPoint, parameters) {
    const BASE_URL = 'http://38.180.92.112:3001/'
    const results = await fetch(`${BASE_URL}${endPoint}?` + new URLSearchParams(parameters))

    const json = await results.json()
    
    return json
}
