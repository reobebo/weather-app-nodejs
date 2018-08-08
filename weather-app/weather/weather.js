const request = require('request');
let getWeather=(lat,lng,callback)=>{
request({
    url:`https://api.darksky.net/forecast/668564f724804b338b4ad578ca77c7e6/${lat},${lng}`,
    json: true
},(error,response,body) =>{
    if(!error && response.statusCode===200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature,
           
        });
        
        console.log(body.currently.temperature);
    }else {
        callback('unable to fetch weather');
    }
    

});
};

module.exports.getWeather=getWeather;