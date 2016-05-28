sap.ui.controller("view.registration", {
	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	onInit : function() {

		var lat;
		var long;

		var oData = [ {
			name : "Bondi Beach",
			lat : -33.890542,
			lng : 151.274856,
		} ];

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({
			places : oData
		});
		var oContext = oModel.getContext('/places/0/');

		var myMap = new openui5.googlemaps.Map({
			lng : -151.2,
			lat : -33.920,
			zoom : 2,
			onMapReady : function(oEvent) {
				alert("hi");
				oController.onMyLocation();
			}
		}).placeAt("id_registration_page");
		this.getView().setModel(oModel);

	},

	/* on marker drag end */
	onMarkerDragEnd : function(oEvent) {
		util.geocodePosition(oEvent.getParameters().position).done(
				updateLocation);
	},

	/* get my location */
	onMyLocation : function() {
		var util = openui5.googlemaps.MapUtils;
		util.currentPosition().then(this.getLocationCallback).then(
				util.geocodePosition).done(this.updateLocation);
	},

	/* update location */
	updateLocation : function(sLocation) {
		// oModel.setProperty(oContext.getPath() + 'name', sLocation);
		// sap.ui.getCore().byId('auto').setValue(sLocation);
		var oModel = sap.ui.getCore().byId("id_registration_page").getModel();
		var oContext = oModel.getContext('/places/0/');
		oModel.setProperty(oContext.getPath() + 'name', sLocation);
		// lat = sLocation.lat;
		// long = sLocation.lng;
		// alert("Lat : " + lat + " and Long : " + long);
		console.log(oModel)
	},

	/* update mode with location adn return a lat lng object */
	getLocationCallback : function(oPos) {
		var oModel = sap.ui.getCore().byId("id_registration_page").getModel();
		var oContext = oModel.getContext('/places/0/');
		oModel.setProperty('lat', oPos.lat, oContext);
		oModel.setProperty('lng', oPos.lng, oContext);
		oModel.setProperty('name', 'My Location', oContext);

		var util = openui5.googlemaps.MapUtils;
		return util.objToLatLng(oPos);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	onAfterRendering : function() {
		//
	},

	onSave : function(oEvent) {
		var stationName = sap.ui.getCore().byId("registration.stationName")
				.getValue();
		var latitude = sap.ui.getCore().byId("registration.latitude")
				.getValue();
		var longitude = sap.ui.getCore().byId("registration.longitude")
				.getValue();

		var aData = jQuery.ajax({
			type : "GET",
			contentType : "application/json",
			url : "station/save",
			data : {
				stationName : stationName,
				stationLatitude : latitude,
				stationLongitude : longitude,
			},
			dataType : "json",
			success : function(data) {
				var aData = jQuery.ajax({
					type : "GET",
					contentType : "application/json",
					url : "station/getAll",
					dataType : "json",
					success : function(data) {
						if (data) {
							var list = sap.ui.getCore()
									.byId("weather.stations");
							var oModel = sap.ui.getCore().getModel(
									"stationData");
							oModel.setData(data);
							oApplication.app.to("weather");
						}
					}
				});
			}
		});
	}

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf sapui5-mobile.water-user
 */
// onExit: function() {
//
// }
});