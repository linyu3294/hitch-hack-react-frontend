const baseUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0'

export const getDirectRouteCost = (originCity, destinationCity) => {
    console.log ("origin ", originCity)
    console.log ("destination ", destinationCity)
    const country = 'US'
    const currency = 'USD'
    const locale = 'en-GB'
    const origin = originCity.skyId
    const destination = destinationCity.skyId
    const outboundDate = 'anytime'
    const inboundPartialDate ='anytime'
    fetch(
        `${baseUrl}/${country}/${currency}/${locale}
                         /${origin}/${destination}
                         /${outboundDate}?inboundpartialdate=${inboundPartialDate}`
        //'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/USD/en-GB/?query=La Paz'
    ,
        {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "6abd74225dmshb0da7758ff343bdp162583jsna13e8612a48a"
        }
    })
        .then(response => response.json())
        .then(actualResponse =>console.log(actualResponse))
        .catch(err => {
            console.log(err);
        });
}

export default {
    getDirectRouteCost
}
