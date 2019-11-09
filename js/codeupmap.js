//-------------codeupmap setup--------------------
mapboxgl.accessToken = mapboxToken;
var codeupmap = new mapboxgl.Map({
    container: 'codeupmap',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 8,
    center: [-98.4936,29.4241],
    minZoom: 0
});

var array = [
    {
        name: "Codeup",
        address: " 600 Navarro St #600, San Antonio, TX 78205"
    }
];

array.forEach(function (element) {
    var results;
    geocode(element.address, mapboxToken).then(function(result){
        results = result;

//---------------marker-------------------

        var markerOptions = {
            color: "blue"
        };

//------------popup---------------------

        var restPopup = new mapboxgl.Popup()
            .setText(element.name)
            .addTo(codeupmap);



        var restMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(codeupmap)
            .togglePopup()
            .setPopup(restPopup);


        restMarker.setPopup(restPopup);
    });
});