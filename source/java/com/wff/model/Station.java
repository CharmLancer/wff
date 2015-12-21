package com.wff.model;

import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseFieldProperty;
import com.wff.database.model.FieldType;

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

	// @Override
	// public String select() {
	// clear();
	// // Select From clause
	// for (int i = 0; i < modelFields.size(); i++) {
	// prepareFromClause(select, from, i);
	// }
	// // Where clause
	// DatabaseField firstField = modelFields.get(0);
	// for (int i = 1; i < modelFields.size(); i++) {
	// if (i == 1) {
	// where.append(firstField.getFieldName() + "." +
	// FieldName.INSTANCE.getValue() + "="
	// + modelFields.get(i).getFieldName() + "." +
	// FieldName.INSTANCE.getValue());
	// } else {
	// where.append(" and " + firstField.getFieldName() + "." +
	// FieldName.INSTANCE.getValue() + "="
	// + modelFields.get(i).getFieldName() + "." +
	// FieldName.INSTANCE.getValue());
	// }
	//
	// }
	// // Filtering
	// for (DatabaseField dbField : queryFields.values()) {
	// where.append(" and " + dbField.getFieldName() + "." +
	// DatabaseTable.value() + "='" + dbField.getFieldValue()
	// + "'");
	// }
	// // Final Statement
	// sql.append("SELECT " + select.toString() + " FROM " + from.toString()
	// + (where.length() > 0 ? " WHERE " + where.toString() : ""));
	// LOGGER.info(sql.toString());
	// return sql.toString();
	// }

	@Override
	public <M extends AbstractModel> M newInstance() {
		// TODO Auto-generated method stub
		return null;
	}

}
