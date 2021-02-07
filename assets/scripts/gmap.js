function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.464467, lng: 35.049480 },
    zoom: 17,
    styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#838383"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#aaaaaa"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#6e6e6e"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],
    disableDefaultUI: true,
  });
  let features = [
    {position: new google.maps.LatLng(48.464467, 35.049480)},
]
let icons = [
    './assets/images/map-marker.svg',
]
  var marker = new google.maps.Marker({
    position: features[0].position,
    icon: icons[0],
    map: map,
});
}  
if (document.getElementById("map")){
  google.maps.event.addDomListener(window, 'load', initMap);
} 

function initMapPage() {
  var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 200
});


// Два масива для русской и украинской версии сайта. B функции addMarker() рассшифровка что означает каждый элемент масива


markers1 = [
    // ['0', '', 50.408442, 30.542944, 'shops', '../img/icons/map-marker-shop.svg', 'ЖК "Nordica" Залізодорsdsdожнє шоссе, 48'],
    // ['1', '', 50.402524, 30.545401, 'shops', '../img/icons/map-marker-shop.svg', 'Отдел продаж "Повітрофлотський проспект, 56'],
    // ['2', '', 50.402029, 30.549213, 'shops', '../img/icons/map-marker-shop.svg', 'Отдел продаж "Глибочицька, 13"'],
    ['3', '', 50.472552, 30.669660, 'pharmacy', '../img/icons/map-marker-pharmacy.svg', 'Аптечный Пункт " Фармация"'],
    // ['4', '', 50.408609, 30.549816, 'kids', '../img/icons/map-marker-kids.svg', 'Берестейська'],
    // ['5', '', 50.409435, 30.541500, 'gym', '../img/icons/map-marker-gym.svg', 'Спеціалізована школа №82'],
    ['6', '', 50.4831394, 30.6689664, 'study', '../img/icons/map-marker-study.svg', 'Заклад дошкільної освіти №175'],
    ['7', '', 50.476591, 30.674436, 'study', '../img/icons/map-marker-study.svg', 'Школа № 23'],
    ['8', '', 50.470772, 30.667248, 'parks', '../img/icons/map-marker-park.svg', 'Веселка'],
    // ['9', '', 50.406413, 30.540897, 'kids', '../img/icons/map-marker-kids.svg', 'КНЕУ'],
    ['10', '', 50.477708, 30.668332, 'gym', '../img/icons/map-marker-gym.svg', 'КСК Дарвін'],
    // ['11', '', 50.406858, 30.545466, 'entertainment', '../img/icons/map-marker-enterteiment.svg', 'Шулявська'],
    ['12', '', 50.474797, 30.682006, 'restaurant', '../img/icons/map-marker-cafe.svg', 'Ресторан Погремушка'],
   
    ['13', '', 50.476011, 30.670330, 'main', '../img/icons/map-clubhouse1-icon.svg', 'КЛУБНЫЙ ДОМ'],
    ['14', '', 50.479549, 30.671644, 'main', '../img/icons/map-clubhouse2-icon.svg', 'КЛУБНЫЙ ДОМ 2'],
    ['15', '', 50.4784891, 30.6703966, 'main', '../img/icons/map-office-icon.svg', 'ОФИС ПРОДАЖ'],
    ['16', '', 50.478511, 30.690267, 'restaurant', '../img/icons/map-marker-cafe.svg', 'Ресторан Лісова казка'],
    ['17', '', 50.476861, 30.671224, 'main', '../img/icons/metka-other-1.png', 'Лісова казка'],
    ['18', '', 50.479996, 30.670560, 'main', '../img/icons/metka-other-1.png', 'Лісова казка 2'],

];
  var map = new google.maps.Map(document.getElementById('infra-map'), {
    center: {
        lat: 50.476011,
        lng: 30.671644
    },
    zoom: 16,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var styleMap = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
  ];
  map.setOptions({
    styles: styleMap
});
for(let i = 0; i < markers1.length; i++){
    addMarker(markers1[i]);
}
function addMarker(marker) {

  var category = marker[4];
  var title = marker[1];
  var pos = new google.maps.LatLng(marker[2], marker[3]);
  var content = "<p class='content'>" + marker[6] + "</p>";
  var markerIcon = {
      url: marker[5]
  };
  marker1 = new google.maps.Marker({
      title: title,
      position: pos,
      category: category,
      map: map,
      icon: markerIcon,
      // animation: google.maps.Animation.DROP,
  });
  gmarkers1.push(marker1);
  // Marker click listener
  google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
      return function () {
          infowindow.setContent(content); // установка нужного контента в всплывайку
          infowindow.open(map, marker1); // открытие нужного окна
          map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
      }
  })(marker1, content));
}
filterMarkers = function (category) {
  for (i = 0; i < markers1.length; i++) {
      marker = gmarkers1[i];
      if (marker.category == category) {
          marker.setMap(map);
          // marker.setAnimation(google.maps.Animation.DROP);
      } else {
          marker.setMap(null)
      }
  }
}
var markItems = document.querySelectorAll('.control__button');

for (var i = 0; i < markItems.length; i++) {
    markItems[i].addEventListener('click', function () {
        markItems.forEach(function (item, i) {
            if (item.classList.contains('control__button_active')) {
                item.classList.remove('control__button_active');
            }
        });

        this.classList.add('control__button_active');
        var category = this.dataset.category;
        filterMarkers(category);
    });
}
}

if (document.getElementById("infra-map")){
  google.maps.event.addDomListener(window, 'load', initMapPage);
} 


/* MAP BUTTON COLLAPSE */
let oddClick = true;
let collapseHeight = $('.control__collapse').outerHeight();
$(".infrasructure__control").css({'bottom' : -collapseHeight})
$( ".control__main-link" ).click(
    function() {
        $( ".infrasructure__control" ).animate({
            bottom: oddClick ? 0 : -collapseHeight
        })
        $( ".control__arrow-icon" ).toggleClass('control__arrow-icon_rotate')
        oddClick = !oddClick;
});


    

/* MAP BUTTON COLLAPSE  END */
