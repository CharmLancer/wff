sap.ui.controller("view.weather", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	onInit : function() {

	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	onBeforeRendering : function() {

	},
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf sapui5-mobile.water-user
	 */
	onAfterRendering : function() {
		var that = this;
		var oModel = new sap.ui.model.json.JSONModel();
		var aData = jQuery.ajax({
			type : "GET",
			contentType : "application/json",
			url : "station/getAll",
			dataType : "json",
			success : function(data) {
				if (data) {
					var list = sap.ui.getCore().byId("weather.stations");
					var oModel = sap.ui.getCore().getModel("stationData");
					oModel.setData(data);
					// http://scn.sap.com/thread/3415475
					var itemTemplate = new sap.m.StandardListItem({
						title : "{model/stationName/value}",
						icon : "sap-icon://temperature",
						description : "{model/stationLatitude/value}",
						iconInset : false,
						type : sap.m.ListType.Navigation,
						// press :
						// oController.selectedItem
						tap : [ that.selectedItem, that ]
					});
					list.setModel(oModel);
					// list.bindAggregation("items", "/", itemTemplate);
					// list.bindItems({path : "/Stations/",template :
					// itemTemplate});
					list.bindAggregation("items", "/", itemTemplate);
				}
			}
		});
	},

	selectedItem : function(evt) {
		var oBindingContext;
		if (evt.getParameter("listItem")) {
			oBindingContext = evt.getParameter("listItem").getBindingContext();
		} else {
			oBindingContext = evt.getSource().getBindingContext();
		}

		var page2 = sap.ui.getCore().byId("id_weather_details_page");
		// var form2 = sap.ui.getCore().byId("id_weather_details_form");
		// form2.setBindingContext(oBindingContext); // make

		page2.setBindingContext(oBindingContext); // make
		page2.setModel(evt.getSource().getModel());
		oApplication.app.to("weather-details");
	},
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