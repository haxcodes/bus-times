var x = document.getElementById("current-location");

// if (!navigator.geolocation) {
//     x.innerHTML = "Geolocation is not supported by this browser.";
// } else {
    
    
//     function getLocation() {
//         return navigator.geolocation.getCurrentPosition(showPosition);
//     }
    
//     function showPosition(position) {
//       console.log( position.coords);
//     }
    
//     getLocation();
    
    

        
// }

// var getLocation = function() {
    
// }



var closestStop = function(currentPos) {
    $.ajax({
      url: "https://vodafonebus.nanoscaleapi.io/closest_stop",
      method: "POST",
      data: currentPos
    }).done(function(data) {
      x.innerHTML = data;
    });
}


// closestStop(getLocation());

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  
  closestStop(crd);

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);