sap.ui.jsview("view.dashboard", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.dashboard
    */
   getControllerName : function() {
      return "view.dashboard";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.dashboard
    */
   createContent : function(oController) {

      return new sap.m.Page({
         title : "Dashboard",
         content : [ this._createDashboard(oController) ],
         enableScrolling : false,
         subHeader : new sap.m.Bar({
            id : 'dashboard-header',
            contentRight : [

            new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("log"),
               press : function() {
                  oApplication.app.to("login");
               }
            }) ]
         }),
         footer : new sap.m.Bar({
            id : 'dashboard-footer',
            contentLeft : [ new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("account")

            }), new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("activities")
            }) ],
            contentRight : [ new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("add-filter")
            }), new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("collaborate")
            }), new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("home")
            }), new sap.m.Button({
               icon : sap.ui.core.IconPool.getIconURI("area-chart")
            }) ]

         })

      });
   },

   _createDashboard : function(oController) {

      var tileContainer = new sap.m.TileContainer({
         tiles : [ new sap.m.StandardTile({
            icon : sap.ui.core.IconPool.getIconURI("globe"),
            title : "Register Station",
            // allow to define area
            // of interests with lat
            // and long
            press : function() {
               oApplication.app.to("registration");
            }
         }), new sap.m.StandardTile({
            icon : sap.ui.core.IconPool.getIconURI("weather-proofing"),
            title : "My Stations",
            press : function() {
               // oController.nav.to("AfoStart");
               oApplication.app.to("weather");
            }
         }), new sap.m.StandardTile({
            icon : sap.ui.core.IconPool.getIconURI("marketing-campaign"),
            title : "Water User",
            press : function() {
               oApplication.app.to("water-user");
            }
         }), new sap.m.StandardTile({
            icon : sap.ui.core.IconPool.getIconURI("retail-store"),
            title : "Water Supplier",
            press : function() {
               oApplication.app.to("water-supplier");
            }
         }) ]
      });
      return tileContainer;
   }

});