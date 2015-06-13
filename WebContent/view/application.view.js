sap.ui.jsview("view.application", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.application
    */
   getControllerName : function() {
      return "view.application";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.application
    */
   createContent : function(oController) {
      this.app = new sap.m.App("appLogin", {
         id : "appLogin",
         initialPage : "login"
      });
      var loginPage = new sap.ui.view({
         id : "login",
         viewName : "view.login",
         type : sap.ui.core.mvc.ViewType.JS
      });
      if (this.app instanceof sap.m.App) {
         this.app.addPage(loginPage);
      } else {
         this.app.addMasterPage(loginPage);
      }

      return this.app;

   }

});