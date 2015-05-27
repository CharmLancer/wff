;
(function() {
   "use strict";
   jQuery.sap.declare("controls.Square");

   jQuery.sap.require("lib.ext.leaflet.leaflet");
   jQuery.sap.includeStyleSheet("js/controls/Square.css");
   sap.ui.core.Control
         .extend(
               "controls.Square",
               { // call the new Control type "Square" and let it inherit
                  // from sap.ui.core.Control

                  // the Control API:
                  metadata : {
                     properties : { // setter and getter are created
                        // behind the
                        // scenes,
                        // incl. data binding and type validation
                        "text" : "string", // in simple cases, just
                        // define the
                        // type
                        "size" : {
                           type : "sap.ui.core.CSSSize",
                           defaultValue : "200px"
                        }
                     // you can also give a default value and more
                     }
                  },

                  onAfterRendering : function(oEvent) {
                     var dom = this.getDomRef();
                     $(dom)
                           .ready(
                                 function() {
                                    var map = L.map(dom);
                                    L
                                          .tileLayer(
                                                'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
                                                {
                                                   maxZoom : 18,
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
                                       maxZoom : 16
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

                                 });
                  },

                  // the part creating the HTML:
                  renderer : function(oRm, oControl) { // static
                     // function, so
                     // use the given
                     // "oControl" instance
                     // instead of "this" in the renderer function

                     oRm.write("<div");
                     oRm.writeControlData(oControl); // writes the
                     // Control ID and
                     // enables event handling -
                     // important!
                     // oRm.addStyle("width", oControl.getSize());
                     // write the Control property size; the Control has
                     // validated it to be a CSS size
                     // oRm.addStyle("height", oControl.getSize());
                     oRm.writeStyles();
                     // add a CSS class for styles common to all Control
                     // instances
                     oRm.addClass("mySquare");
                     // this call writes the above class plus enables
                     // support for Square.addStyleClass(...)
                     oRm.writeClasses();
                     oRm.write(">");
                     // oRm.writeEscaped(oControl.getText()); // write
                     // another
                     // Control property,
                     // with protection
                     // against cross-site-scripting
                     oRm.write("</div>");
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