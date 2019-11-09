//-------------usaamap setup--------------------
mapboxgl.accessToken = mapboxToken;
var usaamap = new mapboxgl.Map({
    container: 'usaamap',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 8,
    center: [-98.4936,29.4241],
    minZoom: 0
});

var array = [
    {
        name: "USAA",
        address: "9800 Fredericksburg Rd, San Antonio, TX 78288"
    },
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
            .addTo(usaamap);



        var restMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(usaamap)
            .togglePopup()
            .setPopup(restPopup);


        restMarker.setPopup(restPopup);
    });
});