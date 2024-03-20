function initMap() {

    /*marker installationernes lokationer*/
    const markers = [
        {
        locationName:'02 GAIA',
        lat: 55.677246,
        lng: 12.581492, 
        address: '⚲ Ved Stranden 14',
        },
        {
        locationName:'04 Bron, Broen, Bridge',
        lat: 55.6747482,
        lng: 12.5770457, 
        address: '⚲ Knippelsbro',
        },
        {
        locationName:'27 The Sun Also Rises',
        lat: 55.6691278,
        lng: 12.5785377, 
        address: '⚲ GoBoat-huset',
        },
        {
        locationName:'30 The Hygge Lighthouse',
        lat: 55.682462,
        lng: 12.574206, 
        address: '⚲ Tårnet på Kultorvet',
        },
        {
        locationName:'17 Orange Affære',
        lat: 55.674348,
        lng: 12.587556, 
        address: '⚲ Under Knippelsbro, Knippelsbrogade 10',
        },
    ];

    //markerstyle//
    const clfMarker = '/clfpin.png'

    /*centrer map på disse koordinater, zoom x ind på map, og fjern googles ui elementer*/
    const centerMap = { lat: 55.6712674, lng: 12.5938239 }
    const mapOptions = {
        center: centerMap,
        zoom: 14,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6195a0"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "0"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "color": "#f5f5f2"
                    },
                    {
                        "gamma": "1"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "-3"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#bae5ce"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fac9a9"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#787878"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "hue": "#0a00ff"
                    },
                    {
                        "saturation": "-77"
                    },
                    {
                        "gamma": "0.57"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#43321e"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "hue": "#ff6c00"
                    },
                    {
                        "lightness": "4"
                    },
                    {
                        "gamma": "0.75"
                    },
                    {
                        "saturation": "-68"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#eaf6f8"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c7eced"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-49"
                    },
                    {
                        "saturation": "-53"
                    },
                    {
                        "gamma": "0.79"
                    }
                ]
            }
        ],
    }

    const map = new google.maps.Map(document.getElementById ('google-map'), mapOptions);

    /*når man klikker på pin så åbner et lille infoboks*/
    const infoWindow = new google.maps.InfoWindow ({
        minWidth: 200,
        maxWidth: 200,
    });



    /*loop igennem alle lokationer//markers*/

    for(let i = 0; i < markers.length; i++) {
        
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map,
            icon: clfMarker
    });


    function createInfoWindows () {
        const infoWindowContent = `
        <div class="clfinfo">
            <h3>${markers[i]['locationName']}</h3>
                <p>${markers[i]['address']}</p>
                </div>`
               ;

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
            })
        }
    }

    createInfoWindows ();
}
    