sap.ui.jsview("sapui5-mobile.map", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.map
	 */
	getControllerName : function() {
		return "sapui5-mobile.map";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.map
	 */
	createContent : function(oController) {
		jQuery.sap.require("sap.ui.model.json.JSONModel");
		var oModel = new sap.ui.model.json.JSONModel({
			longitude : 8,
			latitude : 49,
			zoom : 6
		});
		sap.ui.getCore().setModel(oModel);

		// PART 2: instantiate Control and place it onto the page
		var myMap = new openui5.googlemaps.Map({
			lng : "{/longitude}",
			lat : "{/latitude}",
			zoom : "{/zoom}"
		});
		// .placeAt("content");

		return new sap.m.Page({
			title : "Register Area",
			content : [ myMap,_createDashboard(oController) ],
			showNavButton : true,
			navButtonPress : function(oControlEvent){				
				oApplication.app.back();
			},
			footer : new sap.m.Bar({
				id : 'dashboard-footer',
				contentMiddle : [ new sap.m.Button({
					text : "Add",
					icon : sap.ui.core.IconPool.getIconURI("account")
				}), new sap.m.Button({
					text : "Edit",
					icon : sap.ui.core.IconPool.getIconURI("activities")
				}), new sap.m.Button({
					text : "Delete",
					icon : sap.ui.core.IconPool.getIconURI("add-filter")
				}) ]
			})

		});
	},

	_createDashboard : function(oController) {

		var tileContainer = new sap.m.TileContainer({
			tiles : [ new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("course-book"),
				title : "Add Station",
				press : function() {
					// oController.nav.to("AfoStart");
				}
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("choropleth-chart"),
				title : "Add Water Supplier",
				press : function() {
					// oController.nav.to("AfoStart");
				}
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("database"),
				title : "Add Water User",
				// between water
				// quantity and quality
				// between land and
				// water use
				// between surface water
				// and groundwate
				// between upstream and
				// downstream
				// rainfall
				press : function() {
					// oController.nav.to("AfoStart");
				}
			}) ]
		});
		return tileContainer;
	}
});