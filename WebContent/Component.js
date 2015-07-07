jQuery.sap.declare("wff.Component");

sap.ui.core.UIComponent.extend("wff.Component", {

   init : function() {
      // load googlemaps library
      // sap.ui.getCore().loadLibrary("openui5.googlemaps",
      // "/openui5/googlemaps/");
      // jQuery.sap.require("util.Formatter");
      sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
   },

});