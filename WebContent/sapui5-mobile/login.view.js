sap.ui.jsview("sapui5-mobile.login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-mobile.login
	*/ 
	getControllerName : function() {
		return "sapui5-mobile.login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5-mobile.login
	*/ 
	createContent : function(oController) {
		var lblUserName= new sap.m.Label({ text : "User Name" });  
		var txtUserName = new sap.m.Input({ id: "txtUserName" });  
		var lblPassword= new sap.m.Label({ text : "Password" });  
		var txtPassword = new sap.m.Input({ id: "txtPassword" });
		var button = new sap.m.Button({  
		                              text: "Sign In",  
		                              press: function(){ 
		                            	  // Create a function as a method of controller  
		                            	  //sap.ui.getCore().byId('txtUserName').setEnabled(false);
		                            	  //sap.ui.getCore().byId('txtPassword').setEnabled(false);
		                            	  //sap.ui.getCore().byId('myapp').to("dashboard");
		                            	  oApplication.loadViews();  
		                                  oApplication.app.to("dashboard");  
		                              }  
		                        }) ; 
		 var vbox = new sap.m.VBox({
			 items:[lblUserName,txtUserName,lblPassword,txtPassword,button]
		 })

		 vbox.setAlignItems("Center");
		 vbox.setJustifyContent("Center");
		
 		return new sap.m.Page({
			title: "Water For Food",
			content: [vbox]
		});
	}

});