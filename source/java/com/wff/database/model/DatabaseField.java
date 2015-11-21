package com.wff.database.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

public class DatabaseField extends DatabaseTable implements DatabaseCommand, ResultSetExtractor {
	Logger LOGGER = LoggerFactory.getLogger(DatabaseField.class);
	String instance;
	String fieldName;
	String tableName;
	FieldType fieldType;
	String fieldValue;

	public String getInstance() {
		return instance;
	}

	public void setInstance(String instance) {
		this.instance = instance;
	}

	public DatabaseField(final String fieldName, final FieldType fieldType, final String tableName) {
		super();
		this.fieldName = fieldName;
		this.fieldType = fieldType;
		this.tableName = tableName;
	}

	public DatabaseField setFieldValue(String fieldValue, final String... tableName) {
		if (tableName != null && tableName.length == 1)
			this.tableName = tableName[0];
		this.fieldValue = fieldValue;
		return this;
	}

	public Logger getLOGGER() {
		return LOGGER;
	}

	public String getFieldName() {
		return fieldName;
	}

	public String getTableName() {
		return tableName;
	}

	public FieldType getFieldType() {
		return fieldType;
	}

	public String getFieldValue() {
		return fieldValue;
	}

	@Override
	public String insert(final String instance) {
		String sql = "INSERT INTO \"BIGTABLES\""
				+ "(\"ROWID\", \"INSTANCE\", \"COLUMN\", \"TABLE\", \"VALUE\", \"USER_LABEL\") " + "VALUES "
				+ "(DEFAULT, '" + instance + "', '" + this.fieldName + "', '" + this.tableName + "', '"
				+ this.fieldValue + "', 'USER_ADMIN')";
		return sql;
	}

	@Override
	public String update() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String select() {
		String sql = "SELECT * FROM \"BIGTABLES\"" + " WHERE \"TABLE\" ='" + this.tableName + "'";
		return sql;
	}

	@Override
	public DatabaseField extractData(ResultSet rs) throws SQLException, DataAccessException {
		if (rs.getString("COLUMN").equalsIgnoreCase(this.fieldName)) {
			this.fieldValue = rs.getString("VALUE");
			this.instance = rs.getString("INSTANCE");
			LOGGER.info("(" + this.instance + ")" + this.fieldName + " = " + this.fieldValue);
		}
		return this;
	}

	@Override
	public String toString() {
		return "DatabaseField [instance=" + instance + ", fieldName=" + fieldName + ", tableName=" + tableName
				+ ", fieldType=" + fieldType + ", fieldValue=" + fieldValue + "]";

	}

	public void clear() {
		this.instance = null;
		this.fieldValue = null;
	}

	public boolean contains(DatabaseField dbField) {
		return (this.fieldName.equalsIgnoreCase(dbField.fieldName) && this.fieldType == dbField.fieldType
				&& this.tableName.equalsIgnoreCase(dbField.tableName));
	}

}
