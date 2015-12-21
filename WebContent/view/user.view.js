sap.ui.jsview("view.user", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapui5-mobile.login
	 */
	getControllerName : function() {
		return "view.user";
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
			text : oBundle.getText("view.user.name.label")
		});
		var txtUserName = new sap.m.Input({
			id : "user.UserName",
			placeholder : oBundle.getText("view.user.name.value")
		});
		var lblEmail = new sap.m.Label({
			text : oBundle.getText("view.user.email.label")
		});
		var txtEmail = new sap.m.Input({
			id : "user.UserEmail",
			type : "Email",
			placeholder : oBundle.getText("view.user.email.value")
		});
		var lblPassword = new sap.m.Label({
			text : oBundle.getText("view.user.password.label")
		});
		var txtPassword = new sap.m.Input({
			id : "user.UserPassword",
			type : "Password",
			placeholder : oBundle.getText("view.user.password.value")
		});

		var btnRegister = new sap.m.Button({
			text : "Register",
			press : function() {
				oController.doRegister(this);
			}
		});

		var vbox = new sap.m.VBox({
			items : [ lblUserName, txtUserName, lblEmail, txtEmail,
					lblPassword, txtPassword, btnRegister ]
		})

		vbox.setAlignItems("Center");
		vbox.setJustifyContent("Center");

		var page = new sap.m.Page({
			title : "Water For Food",
			showNavButton : true,
			content : [ vbox ]
		});
		return page;
	}

});