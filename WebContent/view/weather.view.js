sap.ui.jsview("view.weather", {

   /**
    * Specifies the Controller belonging to this View. In the case that it is
    * not implemented, or that "null" is returned, this View does not have a
    * Controller.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   getControllerName : function() {
      return "view.weather";
   },

   /**
    * Is initially called once after the Controller has been instantiated. It is
    * the place where the UI is constructed. Since the Controller is given to
    * this method, its event handlers can be attached right away.
    * 
    * @memberOf sapui5-mobile.water-user
    */
   createContent : function(oController) {
      var oModel = new sap.ui.model.json.JSONModel();
      oModel.loadData('./model/stations.json');
      // http://scn.sap.com/thread/3415475
      var itemTemplate = new sap.m.StandardListItem({
         title : "{name}",
         icon : "sap-icon://temperature",
         description : "{temperature}",
         iconInset : false,
         type : sap.m.ListType.Navigation,
         // press : oController.selectedItem
         tap : [ oController.selectedItem, oController ]
      });
      var list = new sap.m.List("Stations", {
         headerText : "Stations"
      });
      list.setModel(oModel);
      list.bindAggregation("items", "/stations", itemTemplate);

      // var oTable = new sap.ui.table.Table({editable:true});
      // oTable.addColumn(new sap.ui.table.Column({
      // label: new sap.m.Label({text: "Station Nmae"}),
      // template: new sap.m.Text({text:"{name}"}),
      // sortProperty: "name", // with this property, sorting on a table column
      // is activated
      // filterProperty: "name", // with this property, filtering on values
      // within a table column is activated
      // width: "100px"
      // }));
      // oTable.setModel(oModel);

      var page = new sap.m.Page({
         title : "Weather",
         showNavButton : true,
         navButtonPress : function(oControlEvent) {
            oApplication.app.back();
         },
         content : [ list ]
      });

      return page;
   }

});