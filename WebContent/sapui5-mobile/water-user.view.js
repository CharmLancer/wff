sap.ui.jsview("sapui5-mobile.water-user", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-mobile.water-user
	*/ 
	getControllerName : function() {
		return "sapui5-mobile.water-user";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-mobile.water-user
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Water User",
			content: [
			
			]
		});
	}

});