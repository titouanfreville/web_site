
var gMapsLoaded = false;
window.gMapsCallback = function(){
    gMapsLoaded = true;
    $(window).trigger('gMapsLoaded');
}
window.loadGoogleMaps = function(){
    if(gMapsLoaded) return window.gMapsCallback();
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src","http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}

$(document).ready(function(){
    function initialize(){
        var mapOptions = {
            zoom: 10.14,
            center:  new google.maps.LatLng(50.156703,1.1920987),
            mapTypeId: google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById('map'),mapOptions);
    }
    $(window).bind('gMapsLoaded', initialize);
    window.loadGoogleMaps();
});