sap.ui.controller("view.weather-details", {

   /**
    * Called when a controller is instantiated and its View controls (if
    * available) are already created. Can be used to modify the View before it
    * is displayed, to bind event handlers and do other one-time initialization.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   onInit : function() {
      var mapPage = sap.ui.getCore().byId('id_weather_details_page');
      var myMap = new openui5.googlemaps.Map({
         lng : "{longitude}",
         lat : "{latitude}",
         zoom : "{zoom}"
      }).placeAt(mapPage);
   },

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf sapui5-mobile.water-user
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf sapui5-mobile.water-user
 */
// onAfterRendering: function() {
//
// },
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