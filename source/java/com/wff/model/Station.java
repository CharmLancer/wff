package com.wff.model;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseFieldProperty;
import com.wff.database.model.FieldType;

@JsonRootName(value = "Station")
public class Station extends AbstractModel {
	// Variable to know field property such as name, type, table
	public static DatabaseFieldProperty STATION_NAME = new DatabaseFieldProperty("stationName", FieldType.STRING,
			"Station");
	public static DatabaseFieldProperty STATION_LATITUDE = new DatabaseFieldProperty("stationLatitude",
			FieldType.DECIMAL, "Station");
	public static DatabaseFieldProperty STATION_LONGITUDE = new DatabaseFieldProperty("stationLongitude",
			FieldType.DECIMAL, "Station");
	// Variable to store field value
	public DatabaseField stationName;
	public DatabaseField stationLatitude;
	public DatabaseField stationLongitude;

	public Station() {
		stationName = new DatabaseField(STATION_NAME);
		stationLatitude = new DatabaseField(STATION_LATITUDE);
		stationLongitude = new DatabaseField(STATION_LONGITUDE);
		super.addModelFields(stationName);
		super.addModelFields(stationLatitude);
		super.addModelFields(stationLongitude);
	}

}
