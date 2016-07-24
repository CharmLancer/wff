sap.ui.jsview("view.map", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.application
	 */
	getControllerName : function() {
		return "view.map";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.application
	 */
	createContent : function(oController) {
		var map = new sap.m.FlexBox("id_map_view", {
			direction : "Column",
			alignItems : "Center",
			justifyContent : "Center",
		});
		var btnLocate = new sap.m.Button("id.map.view.button.locate", {
			text : "Locate",
			width : "100%",
			press : oController.onLocate
		});
		map.addItem(btnLocate);
		return new sap.m.Page("id_map_page", {
			title : "Navigation Map",
			showNavButton : false,
			enableScrolling : false,
			content : [ map ]
		});
	}

});