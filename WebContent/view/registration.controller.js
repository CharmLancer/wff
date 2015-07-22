jQuery.sap.require("controls.Square");
jQuery.sap.require("lib.ext.leaflet.leaflet");
jQuery.sap.includeStyleSheet("js/lib/ext/leaflet/leaflet.css");
jQuery.sap.includeStyleSheet("js/controls/Square.css");
sap.ui.controller("view.registration", {
   /**
    * Called when a controller is instantiated and its View controls (if
    * available) are already created. Can be used to modify the View before it
    * is displayed, to bind event handlers and do other one-time initialization.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   onInit : function() {
      // var util = openui5.googlemaps.MapUtils;
      // /* get my location */
      // var onMyLocation = function() {
      // util.currentPosition().then(getLocationCallback).then(
      // util.geocodePosition).done(function(sLocation) {
      // alert(sLocation.lng + "," + sLocation.lat);
      // });
      // };
      var registrationPage = sap.ui.getCore().byId('id_registration_page');
      var myMap = new openui5.googlemaps.Map({
         lng : 96.160609,
         lat : 16.843397,
         zoom : 14
      }).placeAt(registrationPage);
   },

   /**
    * Similar to onAfterRendering, but this hook is invoked before the
    * controller's View is re-rendered (NOT before the first rendering! onInit()
    * is used for that one!).
    * 
    * @memberOf sapui5-mobile.water-user
    */
   // onBeforeRendering: function() {
   //
   // },
   /**
    * Called when the View has been rendered (so its HTML is part of the
    * document). Post-rendering manipulations of the HTML could be done here.
    * This hook is the same one that SAPUI5 controls get after being rendered.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   onAfterRendering : function() {

   },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf sapui5-mobile.water-user
 */
// onExit: function() {
//
// }
});