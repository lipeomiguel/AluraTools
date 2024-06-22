if(navigator.geolocation){
    const location = navigator.geolocation.getCurrentPosition(callBackLocation,ErroLOcation);
}else{
    console.log("Geolocation is not supported by this browser.");
}
function callBackLocation(location){
    console.log(`Sua localização é: Latitude: ${location.coords.latitude} e Longitude: ${location.coords.longitude}`);
    return location;
}
function ErroLOcation(error){
    console.log(error);
}