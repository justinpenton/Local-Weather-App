$(document).ready(function() {
  degreesCOrF = "celcius";
  if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(json) {
      $("#location").html((json.name + ", " + json.sys.country));
      $("#temp").html(json.main.temp);
      $("#degrees").html("&#8451");
      $("#description").html((json.weather[0].main));
    });
  });
  }
});

$("#degrees").on("click", function() {
    if (degreesCOrF == "celcius") {
      degreesCOrF = "fahrenheit";
      var val = parseFloat($("#temp").html()) * 9 / 5 + 32;
      $("#degrees").html("&#8457");
      $("#temp").html(val.toFixed(2));
    }
    else {
      degreesCOrF = "celcius";
      var val = (parseFloat($("#temp").html()) - 32) * 5 / 9;
      $("#degrees").html("&#8451");
      $("#temp").html(val.toFixed(2));
    }
});
