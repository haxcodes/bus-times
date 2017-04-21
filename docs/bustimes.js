$( document ).ready(function() {
    getNextBus = function() {
        $.ajax({
          url: "https://vodafonebus.nanoscaleapi.io/bus_times/Clarke",
          method: 'GET',
          dataType: 'json'
        }).done(function(res) {
            var now = new Date();
            var time = '' + now.getHours() + now.getMinutes();

            var nextbus = _.find(res, function(bus) {
                return parseInt(bus.time) > parseInt(time);
            });
            
            var timediff = nextbus.time - time;
            
            $('#next-bus').html(timediff)
        });
        
    }
    getNextBus();
});