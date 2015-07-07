var oApplication = {}; // Global application object

jQuery.sap.require("jquery.sap.resources");
var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
// var oBundle = jQuery.sap.resources({url : "i18n/i18n.properties", locale:
// sLocale});
var oBundle = jQuery.sap.resources({
   url : "i18n/i18n.properties"
});

oApplication.views = {}; // Global views reference via application object
oApplication.loadViews = function()
// LoadViews method for loading views
// in case of successfull login
{
   // var app = new
   // sap.m.App("myapp",{id:"myapp",initialPage:"idapplication1"});
   // var page1 = sap.ui.view({id:"application",
   // viewName:"sapui5-mobile.application", type:sap.ui.core.mvc.ViewType.JS});
   // var page3 = sap.ui.view({id:"dashboard",
   // viewName:"sapui5-mobile.dashboard", type:sap.ui.core.mvc.ViewType.JS});
   // var page2 = sap.ui.view({id:"water-supplier",
   // viewName:"sapui5-mobile.water-supplier",
   // type:sap.ui.core.mvc.ViewType.JS});
   //	
   // app.addPage(page1).addPage(page2);
   // app.placeAt("content");
   this.loadView("dashboard", "master");
   this.loadView("registration", "master");
   this.loadView("weather", "master");
   this.loadView("weather-details", "detail");
   this.loadView("water-supplier", "master");
   this.loadView("water-user", "master");
   // views["login"].placeAt("content");
}
oApplication.loadView = function(sViewName, type)
// LoadView method for loading a single view
// and assigning it to application
{
   if (typeof this.views[sViewName] == "undefined") {
      var sViewFullName = "view." + sViewName;
      this.views[sViewName] = new sap.ui.view({
         id : sViewName,
         viewName : sViewFullName,
         type : sap.ui.core.mvc.ViewType.JS
      });
      if (this.app instanceof sap.m.App) {
         this.app.addPage(this.views[sViewName]);
      } else {
         if (type === "master") {
            this.app.addMasterPage(this.views[sViewName]);
         } else if (type === "detail") {
            this.app.addDetailPage(this.views[sViewName]);
         } else {
            this.app.addPage(this.views[sViewName]);
         }
      }
   }
}

sap.ui.localResources("view"); // setting views folder
jQuery.sap.registerModulePath("lib.ext.leaflet", "js/lib/ext/leaflet");
jQuery.sap.registerModulePath("controls", "js/controls");

// Loading a google maps library
sap.ui.getCore().loadLibrary("openui5.googlemaps", "openui5/googlemaps/");

jQuery.sap.require("sap.ui.model.json.JSONModel");
var oModel = new sap.ui.model.json.JSONModel({
   longitude : 8,
   latitude : 49,
   zoom : 6
});
sap.ui.getCore().setModel(oModel);

// Loading a main application view - container for all other views
sap.ui.view({
   id : "application",
   viewName : "view.application",
   type : sap.ui.core.mvc.ViewType.JS
}).placeAt("content");
