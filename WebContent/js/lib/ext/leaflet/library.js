/**
 * Initialization Code and shared classes of library sap.ui.suite.
 */
sap.ui.define([ 'jquery.sap.global', 'sap/ui/core/library' ], // library
// dependency
function(jQuery) {

    "use strict";
    // delegate further initialization of this library to the Core
    sap.ui.getCore().initLibrary({
	name : "lib",
	version : "${version}",
	dependencies : [ "sap.ui.core" ],
	types : [],
	interfaces : [],
	controls : [ "lib.ext.leaflet.leaflet" ],
	elements : []
    });

    return lib.ext.leaflet.leaflet;

}, /* bExport= */false);
