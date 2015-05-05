var oApplication = {}; // Global application object
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
	this.loadView("dashboard");
	this.loadView("map");
	this.loadView("water-supplier");
	this.loadView("water-user");
}
oApplication.loadView = function(sViewName)
// LoadView method for loading a single view
// and assigning it to application
{
	if (typeof this.views[sViewName] == "undefined") {
		var sViewFullName = "sapui5-mobile." + sViewName;
		this.views[sViewName] = new sap.ui.view({
			id : sViewName,
			viewName : sViewFullName,
			type : sap.ui.core.mvc.ViewType.JS
		});
		this.app.addPage(this.views[sViewName]);
	}
}
sap.ui.localResources("sapui5-mobile"); // setting views folder

// Loading a main application view - container for all other views
sap.ui.view({
	id : "application",
	viewName : "sapui5-mobile.application",
	type : sap.ui.core.mvc.ViewType.JS
}).placeAt("content");
