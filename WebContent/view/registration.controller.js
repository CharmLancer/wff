jQuery.sap.require("controls.Square");
jQuery.sap.require("lib.ext.leaflet.leaflet");
jQuery.sap.includeStyleSheet("js/lib/ext/leaflet/leaflet.css");
jQuery.sap.includeStyleSheet("js/controls/Square.css");
sap.ui.controller("view.registration", {

   _addInputItem : function(id, label) {
      var mapView = sap.ui.getCore().byId('id_map_registration');

      var oLabel = new sap.m.Label({
         text : label
      });
      var oText = new sap.m.Input({
         id : id,
         placeholder : "Enter " + label
      });
      mapView.addItem(oLabel);
      mapView.addItem(oText);
   },
   /**
    * Called when a controller is instantiated and its View controls (if
    * available) are already created. Can be used to modify the View before it
    * is displayed, to bind event handlers and do other one-time initialization.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   onInit : function() {

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
      this._addInputItem("id_station_name", "Station Names");
      this._addInputItem("id_latitude", "Latitude");
      this._addInputItem("id_longitude", "Longitude");

      var btnSaveStation = new sap.m.Button({
         text : "Save Station",
         width : "100%"
      });
      var mapView = sap.ui.getCore().byId('id_map_registration');
      mapView.addItem(btnSaveStation);
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