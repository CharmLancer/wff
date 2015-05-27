jQuery.sap.require("lib.ext.leaflet.leaflet");
sap.ui.jsview("view.water-user", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   getControllerName : function() {
      return "view.water-user";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   createContent : function(oController) {
      return new sap.m.Page({
         title : "Water User",
         showNavButton : true,
         navButtonPress : function(oControlEvent) {
            oApplication.app.back();
         },
         content : [

         ],
         subHeader : new sap.m.Bar({
            id : 'water-supplier-header',
            contentLeft : [
                  new sap.m.Button({
                     icon : sap.ui.core.IconPool
                           .getIconURI("geographic-bubble-chart")
                  }), new sap.m.Button({
                     icon : sap.ui.core.IconPool.getIconURI("measuring-point")
                  }), new sap.m.Button({
                     icon : sap.ui.core.IconPool.getIconURI("overview-chart")
                  }), new sap.m.Button({
                     icon : sap.ui.core.IconPool.getIconURI("factory")
                  }) ]
         })
      });
   }

});