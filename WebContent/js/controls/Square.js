;
(function() {
   "use strict";
   jQuery.sap.declare("controls.Square");

   jQuery.sap.require("lib.ext.leaflet.leaflet");
   jQuery.sap.includeStyleSheet("js/lib/ext/leaflet/leaflet.css");
   sap.ui.core.Control
         .extend(
               "controls.Square",
               { // call the new Control type "Square" and let it inherit
                  // from sap.ui.core.Control

                  // the Control API:
                  metadata : {
                     properties : { // setter and getter are created
                        "id" : {
                           type : "string",
                           defaultValue : "map"
                        },
                        height : {
                           type : "sap.ui.core.CSSSize",
                           defaultValue : "100%"
                        },
                        width : {
                           type : "sap.ui.core.CSSSize",
                           defaultValue : "100%"
                        },
                     }
                  },

                  onAfterRendering : function(oEvent) {
                     var dom = this.getDomRef();

                     var map = L.map(dom);
                     L
                           .tileLayer(
                                 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
                                 {
                                    maxZoom : 9,
                                    attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
                                          + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
                                          + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                                    id : 'examples.map-i875mjb7'
                                 }).addTo(map);

                     // Set the default image path
                     // L.Icon.Default.imagePath = './images';

                     // Set the current viewer's location
                     map.locate({
                        setView : true,
                        maxZoom : 9
                     });
                     map.invalidateSize();
                     //
                     // function onLocationFound(e) {
                     // var radius = e.accuracy / 2;
                     //
                     // L.marker(e.latlng).addTo(map).bindPopup(
                     // "You are within " + radius
                     // + " meters from this point")
                     // .openPopup();
                     //
                     // L.circle(e.latlng, radius).addTo(map);
                     // }
                     // map.on('locationfound', onLocationFound);
                     //
                     // function onLocationError(e) {
                     // alert(e.message);
                     // }
                     //
                     // map.on('locationerror', onLocationError);

                  },

                  // the part creating the HTML:
                  renderer : function(oRm, oControl) { // static
                     oRm.write("<div");
                     oRm.writeControlData(oControl);
                     // oRm.addClass("mySquare");
                     // oRm.write([ 'style="width:', oControl.getWidth(),';
                     // height:100%;' ].join(''));
                     // oRm.writeClasses();
                     oRm.write(">")
                     oRm.write("</div>")
                  },

                  // an event handler:
                  onclick : function(evt) { // is called when the
                     // Control's area
                     // is clicked - no event
                     // registration required
                     // alert("Control clicked! Text of the Control is:" +
                     // this.getText());
                  }
               });
}());