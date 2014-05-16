$(document).ready(function() {
    $(".hero").waypoint(function(direction) {
        if (direction === "down") {
            return $(".navbar-fixed-top").addClass("slim");
        } else {
            return $(".navbar-fixed-top").removeClass("slim");
        }
      }, {
        offset: 55
    });
});
