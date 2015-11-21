sap.ui.controller("view.login", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	// onInit: function() {
	//
	// },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	// onAfterRendering: function() {
	//
	// },
	doLogin : function(oEvent) {
		var txtUserName = sap.ui.getCore().byId("txtUserName");
		var txtPassword = sap.ui.getCore().byId("txtPassword");
		// Create a function as a method of controller
		var aData = jQuery.ajax({
			type : "GET",
			contentType : "application/json",
			url : "user/login",
			data : {
				name : txtUserName.getValue(),
				password : txtPassword.getValue()
			},
			dataType : "json",
			success : function(data) {
				if (data) {
					oApplication.loadViews();
					oApplication.app.to("dashboard");
				} else {
					alert("invalid password");
				}
			}

		});
	},

	doRegister : function(oEvent) {
		var txtUserName = sap.ui.getCore().byId("txtUserName");
		var txtPassword = sap.ui.getCore().byId("txtPassword");
		// Create a function as a method of controller
		var aData = jQuery.ajax({
			type : "GET",
			contentType : "application/json",
			url : "user/register",
			data : {
				name : txtUserName.getValue(),
				password : txtPassword.getValue()
			},
			dataType : "json",
			success : function(data) {
				alert("Success");
			}

		});
	},

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf sapui5-mobile.login
 */
// onExit: function() {
//
// }
});