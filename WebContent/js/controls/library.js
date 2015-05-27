/**
 * Initialization Code and shared classes of library sap.ui.suite.
 */
sap.ui.define([ 'jquery.sap.global', 'sap/ui/core/library' ], // library
// dependency
function(jQuery) {

    "use strict";
    // delegate further initialization of this library to the Core
    sap.ui.getCore().initLibrary({
	name : "controls",
	version : "${version}",
	dependencies : [ "sap.ui.core" ],
	types : [],
	interfaces : [],
	controls : [ "controls.Square" ],
	elements : []
    });

    return controls.Square;

}, /* bExport= */false);
