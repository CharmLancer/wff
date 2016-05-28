sap.ui.jsview("view.login", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	getControllerName : function() {
		return "view.login";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	createContent : function(oController) {

		var lblUserName = new sap.m.Label({
			text : oBundle.getText("view.login.name.label")
		});
		var txtUserName = new sap.m.Input({
			id : "login.UserName",
			placeholder : oBundle.getText("view.login.name.value")
		});
		var lblPassword = new sap.m.Label({
			text : oBundle.getText("view.login.password.label")
		});
		var txtPassword = new sap.m.Input({
			id : "login.UserPassword",
			type : "Password",
			placeholder : oBundle.getText("view.login.password.value")
		});
		var btnLogin = new sap.m.Button({
			text : "Sign In",
			press : function() {
				oController.doLogin(this);
			}
		});
		var btnRegister = new sap.m.Button({
			text : "Register",
			press : function() {
				oController.doRegister(this);
			}
		});

		var oModel = new sap.ui.model.json.JSONModel({
			longitude : 8,
			latitude : 49,
			zoom : 6
		});
		sap.ui.getCore().setModel(oModel);

		var vbox = new sap.m.VBox({
			items : [ lblUserName, txtUserName, lblPassword, txtPassword,
					btnLogin, btnRegister ]
		})

		vbox.setAlignItems("Center");
		vbox.setJustifyContent("Center");

		var page = new sap.m.Page("id_login_view", {
			title : "Water For Food",
			content : [ vbox ]
		});
		return page;
	}

});