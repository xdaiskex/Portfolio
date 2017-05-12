//Google maps black map-gic 
//Oh god that was horrible, thank god no one reads the comments.
var map, places, iw;
var markers = [];
var searchTimeout;
var centerMarker;
var autocomplete;
var hostnameRegexp = new RegExp('^https?://.+?/');

function initMap() {
    var myLatlng = new google.maps.LatLng(28.6023000,-81.2000745);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    places = new google.maps.places.PlacesService(map);
    google.maps.event.addListener(map, 'tilesloaded', tilesLoaded);

    document.getElementById('keyword').onkeyup = function(e) {
        if (!e) var e = window.event;
        if (e.keyCode != 13) return;
        document.getElementById('keyword').blur();
        search(document.getElementById('keyword').value);
    }
}

function tilesLoaded() {
    search();
    google.maps.event.clearListeners(map, 'tilesloaded');
}

function searchIfRankByProminence() {
    if (document.getElementById('rankBy').value == 'prominence') {
        search();
    }    
}

function search() {
    clearResults();
    clearMarkers();

    if (searchTimeout) {
        window.clearTimeout(searchTimeout);
    }
    searchTimeout = window.setTimeout(reallyDoSearch, 200);
}

function reallyDoSearch() {      
    var type = document.getElementById('type').value;
    var keyword = document.getElementById('keyword').value;
    var rankBy = document.getElementById('rankBy').value;

    var search = {};

    if (keyword) {
        search.keyword = keyword;
    }

    if (type != 'establishment') {
        search.types = [type];
    }

    if (rankBy == 'distance' && (search.types || search.keyword)) {
        search.rankBy = google.maps.places.RankBy.DISTANCE;
        search.location = map.getCenter();
        centerMarker = new google.maps.Marker({
            position: search.location,
            animation: google.maps.Animation.DROP,
            map: map
        });
    } else {
        search.bounds = map.getBounds();
    }

    places.search(search, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                markers.push(new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                }));
                google.maps.event.addListener(markers[i], 'click', getDetails(results[i], i));
                window.setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    if (centerMarker) {
        centerMarker.setMap(null);
    }
}

function dropMarker(i) {
    return function() {
        if (markers[i]) {
            markers[i].setMap(map);
        }
    }
}

function addResult(result, i) {
    var results = document.getElementById('results');
    var restaurant = document.createElement('div');
    restaurant.className += "col l4 m6 s12 restaurant"
    restaurant.style.backgroundColor = (i% 2 == 0 ? '#E0E0E0' : '#FFFFFF');
    restaurant.onclick = function() {
        google.maps.event.trigger(markers[i], 'click');
    };
    restaurant.onmouseover = function() {
        restaurant.style.backgroundColor = '#F44336';
    };
    restaurant.onmouseout = function() {
        restaurant.style.backgroundColor = (i% 2 == 0 ? '#E0E0E0' : '#FFFFFF');
    };

    var nameTd = document.createElement('td');
    nameTd.className += "name"

    var name = document.createTextNode(result.name);
    nameTd.appendChild(name);
    restaurant.appendChild(nameTd);
    results.appendChild(restaurant);
}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

function getDetails(result, i) {
    return function() {
        places.getDetails({
            reference: result.reference
        }, showInfoWindow(i));
    }
}

function showInfoWindow(i) {
    return function(place, status) {
        if (iw) {
            iw.close();
            iw = null;
        }

        if (status == google.maps.places.PlacesServiceStatus.OK) {
            iw = new google.maps.InfoWindow({
                content: getIWContent(place)
            });
            iw.open(map, markers[i]);        
        }
    }
}

function getIWContent(place) {
    var content = '';
    content += '<table>';
    content += '<tr class="iw_table_row">';
    content += '<td><b><a href="' + place.url + '">' + place.name + '</a></b></td></tr>';
    content += '<tr class="iw_table_row"><td class="iw_attribute_name">Address:</td><td>' + place.vicinity + '</td></tr>';
    if (place.formatted_phone_number) {
        content += '<tr class="iw_table_row"><td class="iw_attribute_name">Telephone:</td><td>' + place.formatted_phone_number + '</td></tr>';      
    }
    if (place.rating) {
        var ratingHtml = '';
        for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
                ratingHtml += '&#10025;';
            } else {
                ratingHtml += '&#10029;';
            }
        }
        content += '<tr class="iw_table_row"><td class="iw_attribute_name">Rating:</td><td><span id="rating">' + ratingHtml + '</span></td></tr>';
    }
    if (place.website) {
        var fullUrl = place.website;
        var website = hostnameRegexp.exec(place.website);
        if (website == null) { 
            website = 'http://' + place.website + '/';
            fullUrl = website;
        }
        content += '<tr class="iw_table_row"><td class="iw_attribute_name">Website:</td><td><a href="' + fullUrl + '">' + website + '</a></td></tr>';
    }
    content += '</table>';
    return content;
}