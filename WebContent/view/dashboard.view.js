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
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
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
				contentMiddle : [ new sap.m.Button({
					text : "Account",
					icon : sap.ui.core.IconPool.getIconURI("account")
				}), new sap.m.Button({
					text : "Search",
					icon : sap.ui.core.IconPool.getIconURI("add-filter")
				})]

			})

		});
	},

	_createDashboard : function(oController) {

		var tileContainer = new sap.m.TileContainer({
			tiles : [  new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("globe"),
				title : "Register Area",
				// allow to define area
				// of interests with lat
				// and long
				press : function() {
					oApplication.app.to("registration");
				}
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("weather-proofing"),
				title : "Flood and Droughts Alert",
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
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("database"),
				title : "Data Collection",
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
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("choropleth-chart"),
				title : "Analytics",
				// provide visualization
				// of selected area
				// based on data
				// collected.
				press : function() {
					// oController.nav.to("AfoStart");
				}
			}), new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("temperature"),
				title : "Temperature",
				// provide standard form
				press : function() {
					// oController.nav.to("AfoStart");
				}
			}),new sap.m.StandardTile({
				icon : sap.ui.core.IconPool.getIconURI("course-book"),
				title : "Help",
				// based on current
				// user's country law
				// and international
				// law.
				press : function() {
					// oController.nav.to("AfoStart");
				}
			})]
		});
		return tileContainer;
	}

});