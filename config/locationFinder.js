const fetch = require("node-fetch");
const secret_config = require('./secret')

const locationFinder = (addr) => {

    let lat_long_result;

    fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeURIComponent(addr), {
        method: 'GET',
        headers: {'Authorization': `KakaoAK ${secret_config["kakaomap-secret-key"]}`}
    }).then(res => res.json())
        .then(data => {
            // map_result = JSON.stringify(data, null, '\t')

            lat_long_result = JSON.stringify(data, null, '\t')
            console.log("locationFinder Result")
            console.log(lat_long_result)
        })
        .catch(error => console.error('Error:', error));

    return lat_long_result
}
module.exports = locationFinder;