let search_ip = document.getElementById('ip_search');

let view_ip = document.getElementById('ip_address');
let locale = document.getElementById('location');
let timezone = document.getElementById('timezone');
let isp = document.getElementById('isp');


let direction = {
    lat:34.0614,
    long:-118.08162
}


var mymap = L.map('map').setView([direction.lat,direction.long], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw'
}).addTo(mymap);
var marker = L.marker([direction.lat,direction.long]).addTo(mymap);


traceIP = ()=>{
    if(search_ip.value === null) return
    
    let url = "https://geo.ipify.org/api/v2/country,city?";

    const params = {
        apikey: 'at_zGiGybSoLocPbND4kXi3bpyZ1kWpn',
        ipAddress:search_ip.value
    };

    fetchIPDetails(url,params)
} 

 fetchIPDetails = async(url,params) =>{

    var url = url + 'apiKey=' + params.apikey + '&ipAddress=' + params.ipAddress;
    let response = await fetch(url).then( response => response.json() )

    if(response.code === 403 || response.code === 422){
        alert(response.messages)
    }

    view_ip.innerText = response.ip;
    let tempLocale = `${response['location'].region},${response['location'].country} ${response['location'].postalCode}`
    locale.innerText = tempLocale
    timezone.innerText = response['location'].timezone
    isp.innerText = response.isp

 
    mymap.setView([response.location.lat, response.location.lng], 13);
    marker.setLatLng([response.location.lat, response.location.lng])

      



    search_ip.value = ''



}