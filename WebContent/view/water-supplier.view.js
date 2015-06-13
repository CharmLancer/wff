jQuery.sap.require("controls.Square");
jQuery.sap.require("lib.ext.leaflet.leaflet");
sap.ui.jsview("view.water-supplier", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.water-supplier
    */
   getControllerName : function() {
      return "view.water-supplier";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.water-supplier
    */
   createContent : function(oController) {
      var overflowToolbar = new sap.m.OverflowToolbar({
         content : [ new sap.m.Button({
            icon : sap.ui.core.IconPool.getIconURI("doctor")
         }), new sap.m.Button({
            icon : sap.ui.core.IconPool.getIconURI("employee")
         }), new sap.m.Button({
            icon : sap.ui.core.IconPool.getIconURI("electronic-medical-record")
         }), new sap.m.Button({
            icon : sap.ui.core.IconPool.getIconURI("education")
         }), new sap.m.Button({
            icon : sap.ui.core.IconPool.getIconURI("family-protection")
         }) ]
      });

      // var mapEditor = new sap.ui.commons.Panel("id_map_viewer", {
      // width : "100%"
      // });
      var mapEditor = new sap.ui.commons.layout.MatrixLayout({
         id : "id_map_viewer",
         layoutFixed : false
      });

      return new sap.m.Page('id_map_page', {
         title : "Water Supplier",
         showNavButton : true,
         enableScrolling : false,
         navButtonPress : function(oControlEvent) {
            oApplication.app.back();
         },
         content : [ mapEditor ],
         subHeader : new sap.m.Bar({
            id : 'id_water_supplier_header',
            contentRight : [ overflowToolbar ]
         }),
         footer : new sap.m.Bar({
            id : 'water-supplier-footer',
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
   }

});