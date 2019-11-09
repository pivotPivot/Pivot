//-------------map setup--------------------
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 12,
    center: [-98.4936,29.4241],
    minZoom: 0
});

var array = [
    {
        name: "USAA",
        address: "9800 Fredericksburg Rd, San Antonio, TX 78288"
    },
    {
        name: "Houston Street Garage",
        address: "111 College St, San Antonio, TX, 78205"
    },
    {
        name: "Central Library Garage",
        address: "600 Soledad St, San Antonio, TX, 78205"
    },
    {
        name: "Convention Center Garage",
        address: "41 Bowie St, San Antonio, TX, 78205"
    },
    {
        name: "ST. Mary's Street Garage",
        address: "205 E Travis St, San Antonio, TX, 78205"
    },
    {
        name: "Martinez Lot",
        address: "S Alamo St & Martinez St, San Antonio, TX, 78205"
    },
    {
        name: "Dolorosa Lot",
        address: "702 Dolorosa, San Antonio, TX, 78205"
    },
    {
        name: "S. Alamo Lot",
        address: "418 S Alamo St, San Antonio, TX, 78205"
    },
    {
        name: "Cesar Chavez GSA Lot",
        address: "700 E. Cesar E. Chavez Blvd, San Antonio, TX, 78205"
    },
    {
        name: "Houston/Nolan Lot",
        address: "E Houston St, San Antonio, TX, 78202"
    },
    {
        name: "Market Square Lot",
        address: "612 W Commerce St, San Antonio, TX, 78204"
    },
    {
        name: "Municipal Court",
        address: "401 S Frio St, San Antonio, TX, 78207"
    },
    {
        name: "I-37",
        address: "10th St and Austin St, San Antonio, TX, 78202"
    },
    {
        name: "City Tower Garage",
        address: "100 BLK N. Main St, San Antonio, TX, 78205"
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
            .addTo(map);



        var restMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map)
            .togglePopup()
            .setPopup(restPopup);


        restMarker.setPopup(restPopup);
    });
});
