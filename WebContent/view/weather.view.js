sap.ui.jsview("view.weather", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-mobile.water-user
	*/ 
	getControllerName : function() {
		return "view.weather";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-mobile.water-user
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData('./model/area.json');
		
		var list = new sap.m.List({
			headerText:"Stations"
		});
		list.setModel(oModel);
		oApplication.app.setModel(oModel,'data');
		
		// bind the List items to the data collection
		list.bindItems({
			path : "data>/areas", 
			sorter : new sap.ui.model.Sorter("Station Name"),
			template : new sap.m.StandardListItem({
				title: "{data>name}",
				description: "{data>temperature}",
				type: sap.m.ListType.Navigation,
				press:function(evt){
					var oBindingContext = evt.getSource().getBindingContext(); // evt.getSource() is the ListItem
					var page2=sap.ui.getCore().byId("id_weather_details_page");
					page2.setBindingContext(oBindingContext,"data"); // make sure the detail page has the correct data context
					oApplication.app.to("weather-details");
				}
			})
		});
		
		
//		var oTable = new sap.ui.table.Table({editable:true});
//		oTable.addColumn(new sap.ui.table.Column({
//			label: new sap.m.Label({text: "Station Nmae"}), 
//			template: new sap.m.Text({text:"{name}"}),
//			sortProperty: "name", // with this property, sorting on a table column is activated
//			filterProperty: "name", // with this property, filtering on values within a table column is activated
//			width: "100px"
//		}));
//		oTable.setModel(oModel);
		
 		return new sap.m.Page({
			title: "Weather",
			showNavButton : true,
			navButtonPress : function(oControlEvent){				
				oApplication.app.back();
			},
			content: [list
			          
			]
		});
	}

});