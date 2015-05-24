sap.ui.jsview("view.map", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.map
	 */
	getControllerName : function() {
		return "view.map";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.map
	 */
	createContent : function(oController) {
		//jQuery.sap.require("sap.ui.model.json.JSONModel");
		// create a "json" Model
		var oModel = new sap.ui.model.json.JSONModel();
		// load data from URL
		//oModel.loadData('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139');
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData('./model/area.json');
		var oTable = new sap.ui.table.Table({editable:true});
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Station Nmae"}), 
			template: new sap.m.Text({text:"{name}"}),
			sortProperty: "name", // with this property, sorting on a table column is activated
			filterProperty: "name", // with this property, filtering on values within a table column is activated
			width: "100px"
		}));
		oTable.setModel(oModel);
		
		return new sap.m.Page({
			title : "Register Area",
			content : [oTable ],
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