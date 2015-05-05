sap.ui.jsview("sapui5-mobile.water-supplier", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-mobile.water-supplier
	*/ 
	getControllerName : function() {
		return "sapui5-mobile.water-supplier";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-mobile.water-supplier
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			],
			subHeader: new sap.m.Bar({
				id: 'water-supplier-header',
				contentLeft: [new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("doctor")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("employee")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("electronic-medical-record")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("education")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("family-protection")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("geographic-bubble-chart")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("measuring-point")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("overview-chart")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("factory")} )]
			}),
			footer: new sap.m.Bar({
				id: 'water-supplier-footer',
				contentMiddle: [new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("account")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("activities")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("add-filter")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("collaborate")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("home")} ),
								new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("area-chart")} )]
			
			})
		});
	}

});