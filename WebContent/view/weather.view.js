sap.ui.jsview("view.weather", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	getControllerName : function() {
		return "view.weather";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	createContent : function(oController) {
		var list = new sap.m.List("weather.stations", {
			headerText : "Stations"
		});

		var page = new sap.m.Page({
			title : "Weather",
			showNavButton : true,
			navButtonPress : function(oControlEvent) {
				oApplication.app.back();
			},
			content : [ list ]
		});

		return page;
	}

});