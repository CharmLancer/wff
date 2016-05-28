sap.ui.jsview("view.registration", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	getControllerName : function() {
		return "view.registration";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	createContent : function(oController) {
		var map = new sap.m.FlexBox("id_map_registration", {
			direction : "Column",
			alignItems : "Center",
			justifyContent : "Center",
		});

		addInputItem = function(id, label, binding) {
			var mapView = sap.ui.getCore().byId('id_map_registration');

			var oLabel = new sap.m.Label({
				text : label
			});
			var oText = new sap.m.Input({
				id : id,
				placeholder : "Enter " + label,
			// value : binding,
			// valueLiveUpdate : true
			});
			mapView.addItem(oLabel);
			mapView.addItem(oText);
		};

		addInputItem("registration.stationName", "Station Names",
				"{/station/stationName}");
		addInputItem("registration.latitude", "Latitude",
				"{/station/stationLatitude}");
		addInputItem("registration.longitude", "Longitude",
				"{/station/stationLongitude}");
		// addInputItem("id_datetime", "Date and Time");
		// addInputItem("id_temperature", "Temperature");
		// addInputItem("id_water_level", "Water Level");

		var btnSaveStation = new sap.m.Button(
				"id.registration.view.button.save", {
					text : "Save Station",
					width : "100%",
					press : oController.onSave
				});
		var btnShowMyLocation = new sap.m.Button(
				"id.registration.view.button.mylocation", {
					text : "Show My Location",
					width : "100%",
					press : oController.onMyLocation
				});
		map.addItem(btnSaveStation);
		map.addItem(btnShowMyLocation);

		return new sap.m.Page("id_registration_page", {
			title : "Register Station",
			showNavButton : true,
			enableScrolling : false,
			navButtonPress : function(oControlEvent) {
				oApplication.app.back();
			},
			content : [ map ]
		});
	}

});