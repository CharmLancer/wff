sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/ui/core/ResizeHandler","google.maps","./MapUtils","./MapTypeId"],function(t,e,i,o,s,a){"use strict";var n=e.extend("openui5.googlemaps.Map",{metadata:{properties:{lat:{type:"float",bindable:"bindable",defaultValue:1},lng:{type:"float",bindable:"bindable",defaultValue:1},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"20em"},zoom:{type:"int",defaultValue:8},disableDefaultUI:{type:"boolean",defaultValue:!0},mapTypeId:{type:"string",defaultValue:a.ROADMAP},panControl:{type:"boolean",defaultValue:!1},zoomControl:{type:"boolean",defaultValue:!1},mapTypeControl:{type:"boolean",defaultValue:!1},streetViewControl:{type:"boolean",defaultValue:!1}},defaultAggregation:"markers",aggregations:{markers:{type:"openui5.googlemaps.Marker",multiple:!0,bindable:"bindable"},polylines:{type:"openui5.googlemaps.Polyline",multiple:!0,bindable:"bindable"},polygons:{type:"openui5.googlemaps.Polygon",multiple:!0,bindable:"bindable"},directions:{type:"openui5.googlemaps.Directions",multiple:!1,bindable:"bindable"},markerCluster:{type:"openui5.googlemaps.MarkerCluster",multiple:!1,bindable:"bindable"}},events:{ready:{}}},renderer:function(t,e){t.write("<div "),t.writeControlData(e),t.addStyle("width","auto"),t.addStyle("height","auto"),t.writeClasses(),t.writeStyles(),t.write(">"),t.renderControl(e._html),t.write("</div>")}});return n.prototype.init=function(){this._dragging=!1,this.aListeners=[],this.mapId=this.getId()+"-map",this._html=new sap.ui.core.HTML({content:"<div style='height: "+this.getHeight()+";width: "+this.getWidth()+";' id='"+this.mapId+"'></div>"})},n.prototype.setHeight=function(t){this.setProperty("height",t,!0),this.setSize()},n.prototype.setWidth=function(t){this.setProperty("width",t,!0),this.setSize()},n.prototype.setSize=function(){if(t.sap.domById(this.mapId))t.sap.byId(this.mapId).css("height",this.getHeight()).css("width",this.getWidth());else{var e=t(this._html.getContent());e.css("height",this.getHeight()).css("width",this.getWidth()),this._html.setContent(e.outerHTML())}},n.prototype.setZoom=function(t){this.setProperty("zoom",t,!0),this.map&&t!==this.map.getZoom()&&this.map.setZoom(t)},n.prototype.setLat=function(t){var e=parseFloat(t);s.floatEqual(e,this.getLat())||(this.setProperty("lat",e,!0),this._updateCenter())},n.prototype.setLng=function(t){var e=parseFloat(t);s.floatEqual(e,this.getLng())||(this.setProperty("lng",e,!0),this._updateCenter())},n.prototype._updateCenter=function(){this.map&&null!=this.getLat()&&null!=this.getLng()&&(t.sap.clearDelayedCall(this.delayedCallId),this.delayedCallId=t.sap.delayedCall(0,this,function(){this.map.setCenter(new o.LatLng(this.getLat(),this.getLng())),this.notifyAggregations("MapRendered")}))},n.prototype.setMapTypeId=function(t){this.setProperty("mapTypeId",t,!0),this.map&&t!==this.map.getMapTypeId()&&this.map.setMapTypeId(t)},n.prototype.setZoomControl=function(t){this.setProperty("zoomControl",t,!0),this.map&&t!==this.map.getZoomControl()&&this.map.setZoomControl(t)},n.prototype.setDisableDefaultUi=function(t){this.setProperty("disableDefaultUi",t,!0),this.map&&this.map.setOptions({disableDefaultUI:this.disableDefaultUI})},n.prototype.zoomChanged=function(){this.map.getZoom()!==this.getZoom()&&this.setZoom(this.map.getZoom())},n.prototype.mapTypeIdChanged=function(){this.map.getMapTypeId()!==this.getMapTypeId()&&this.setMapTypeId(this.map.getMapTypeId())},n.prototype.onResize=function(){var t=this.map.getCenter();this.trigger("resize"),this.map.setCenter(t)},n.prototype._getMapOptions=function(){var t={};return t.zoom=this.getZoom(),t.center=new o.LatLng(this.getLat(),this.getLng()),t.disableDefaultUi=this.getDisableDefaultUI(),t.mapTypeId=this.getMapTypeId(),t.panControl=this.getPanControl(),t.zoomControl=this.getZoomControl(),t.mapTypeControl=this.getMapTypeControl(),t.streetViewControl=this.getStreetViewControl(),t},n.prototype.notifyAggregations=function(t){this._notifyMarkers(t,this.map),this._notifyPolylines(t,this.map),this._notifyPolygons(t,this.map),this._notifyDirections(t,this.map),this._notifyMarkerCluster(t,this.map)},n.prototype.onAfterRendering=function(){return void 0===o.loaded?(void 0===this.subscribed&&(sap.ui.getCore().getEventBus().subscribe(o.notifyEvent,this.createMap,this),this.subscribed=!0),!1):void(this.initialized?this._updateCenter():this.createMap())},n.prototype.createMap=function(){this.getLat()&&this.getLng()&&(this.map=new o.Map(t.sap.domById(this.mapId),this._getMapOptions()),this.notifyAggregations("MapRendered"),this.addListener("drag",t.proxy(this.isDragging,this)),this.addListener("dragstart",t.proxy(this.isDragging,this)),this.addListener("zoom_changed",t.proxy(this.zoomChanged,this)),this.addListener("center_changed",t.proxy(this.updateValues,this)),this.addListener("idle",t.proxy(this.mapChanged,this)),this.addListener("maptypeid_changed",t.proxy(this.mapTypeIdChanged,this)),this.resizeID=i.register(t.sap.domById(this.mapId),t.proxy(this.onResize,this)),this.initialized=!0)},n.prototype.addListener=function(t,e){this.aListeners.push(o.event.addListener(this.map,t,e))},n.prototype.removeListeners=function(){this.aListeners.forEach(function(t){t.remove()}),this.aListeners=[]},n.prototype.trigger=function(t){o.event.trigger(this.map,t)},n.prototype.isDragging=function(){this._dragging=!0},n.prototype.isNotDragging=function(){this._dragging=!1},n.prototype.mapChanged=function(){this._dragging&&this.isNotDragging(),this.updateValues(),this.fireReady({map:this.map,context:this.getBindingContext(),lat:this.getLat(),lng:this.getLng()})},n.prototype.updateValues=function(){var t=s.latLngToObj(this.map.getCenter());s.floatEqual(t.lat,this.getLat())||this.setProperty("lat",t.lat,!0),s.floatEqual(t.lng,this.getLng())||this.setProperty("lng",t.lng,!0)},n.prototype._notifyMarkers=function(t,e){this.getMarkers().forEach(function(i){i["on"+t](e)})},n.prototype._notifyPolylines=function(t,e){this.getPolylines().forEach(function(i){i["on"+t](e)})},n.prototype._notifyPolygons=function(t,e){this.getPolygons().forEach(function(i){i["on"+t](e)})},n.prototype._notifyDirections=function(t,e){this.getDirections()&&this.getDirections()["on"+t](e)},n.prototype._notifyMarkerCluster=function(t,e){this.getMarkerCluster()&&this.getMarkerCluster()["on"+t](e)},n.prototype.resetMap=function(){this.removeListeners(),this.map&&this.map.set(null)},n.prototype.exit=function(){this.resetMap(),i.deregister(this.resizeID)},n},!0);