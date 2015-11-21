package com.wff.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.RowMapper;

import com.wff.database.model.DatabaseCommand;
import com.wff.database.model.DatabaseField;
import com.wff.database.model.FieldName;

public abstract class AbstractModel implements RowMapper, DatabaseCommand {
	Logger LOGGER = LoggerFactory.getLogger(AbstractModel.class);
	protected ArrayList<DatabaseField> modelFields = new ArrayList();

	protected ArrayList<DatabaseField> queryFields = new ArrayList();

	public ArrayList<DatabaseField> getModelFields() {
		return modelFields;
	}

	public void setModelFields(ArrayList<DatabaseField> modelFields) {
		this.modelFields = modelFields;
	}

	public void setQueryFields(ArrayList<DatabaseField> queryFields) {
		this.queryFields = queryFields;
	}

	public void addModelFields(DatabaseField dbField) {
		modelFields.add(dbField);
	}

	public AbstractModel build(DatabaseField... fields) {
		this.queryFields.clear();
		for (DatabaseField dbField : modelFields) {
			boolean found = false;
			for (DatabaseField field : fields) {
				if (field.contains(dbField)) {
					found = true;
				}
			}
			if (!found) {
				dbField.clear();
			}
		}
		// Assign new value
		for (DatabaseField field : fields) {
			this.queryFields.add(field);
		}
		return this;
	};

	public ArrayList<DatabaseField> getQueryFields() {
		return queryFields;
	}

	public void prepareFromClause(StringBuilder select, DatabaseField field, StringBuilder from, boolean... end) {
		select.append(field.getFieldName() + "." + FieldName.INSTANCE.getValue());
		select.append(",");
		select.append(field.getFieldName() + "." + FieldName.VALUE.getValue() + " " + field.getFieldName());
		// From clause
		from.append("(");
		from.append("SELECT ");
		from.append(FieldName.INSTANCE.getValue() + "," + FieldName.VALUE.getValue());
		from.append(" FROM " + field.getRootTable());
		from.append(" WHERE " + FieldName.TABLE.getValue() + "='" + field.getTableName() + "'");
		from.append(" AND " + FieldName.COLUMN.getValue() + "='" + field.getFieldName() + "'");
		for (DatabaseField dbField : queryFields) {
			if (dbField.contains(field)) {
				if (dbField.getFieldValue() != null && !dbField.getFieldValue().isEmpty()) {
					from.append(" AND " + FieldName.VALUE.getValue() + "='" + dbField.getFieldValue() + "'");
				}
				break;
			}
		}
		from.append(")");
		from.append(field.getFieldName());
		if (end != null && end.length > 0 && end[0]) {
			select.append(" ");
			from.append(" ");
		} else {
			select.append(",");
			from.append(",");
		}
		LOGGER.info("From clause " + from.toString());
	}

	public String toString() {
		StringBuilder sb = new StringBuilder();
		for (DatabaseField field : modelFields) {
			sb.append(field.toString());
			sb.append("\n");
		}
		return sb.toString();
	};

	@Override
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		for (DatabaseField field : modelFields) {
			if (rs.getString(field.getFieldName()) != null) {
				field.setFieldValue(rs.getString(field.getFieldName()).toString(), field.getTableName());
			}
			if (rs.getString("INSTANCE") != null) {
				field.setInstance(rs.getString("INSTANCE"));
			}
		}
		return this;
	}

}
