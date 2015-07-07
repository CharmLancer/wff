sap.ui.jsview("view.weather-details", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   getControllerName : function() {
      return "view.weather-details";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   createContent : function(oController) {
      var form = new sap.ui.layout.form.SimpleForm("id_weather_details_form", {
         title : "{name}",
         content : [ new sap.m.Label({
            text : "Latitude"
         }), new sap.m.Text({
            text : "{latitude}"
         }), new sap.m.Label({
            text : "Longitude"
         }), new sap.m.Text({
            text : "{longitude}"
         }) ]
      });

      var page2 = new sap.m.Page("id_weather_details_page", {
         title : "Detail Page",
         showNavButton : true,
         enableScrolling : false,
         navButtonPress : function() {
            oApplication.app.back();
         },
         content : [ form ]
      });
      return page2;
   }

});