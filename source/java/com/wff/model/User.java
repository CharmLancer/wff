package com.wff.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseFieldProperty;
import com.wff.database.model.DatabaseTable;
import com.wff.database.model.FieldType;

public class User extends AbstractModel {
	Logger LOGGER = LoggerFactory.getLogger(User.class);

	public static DatabaseFieldProperty USER_NAME = new DatabaseFieldProperty("userName", FieldType.STRING, "User");
	public static DatabaseFieldProperty USER_PASSWORD = new DatabaseFieldProperty("userPassword", FieldType.DECIMAL,
			"User");

	public DatabaseField userName;
	public DatabaseField userPassword;

	public User() {
		userName = new DatabaseField(USER_NAME, DatabaseTable.usersTable());
		userPassword = new DatabaseField(USER_PASSWORD, DatabaseTable.usersTable());
		super.addModelFields(userName);
		super.addModelFields(userPassword);
	}

	// @Override
	// public String select() {
	// // clear();
	// //
	// // for (int i = 0; i < modelFields.size(); i++) {
	// // prepareFromClause(select, from, i);
	// // }
	// //
	// // where.append(userName.getFieldName() + "." +
	// // FieldName.INSTANCE.getValue() + "=" + userPassword.getFieldName()
	// // + "." + FieldName.INSTANCE.getValue());
	// // for (DatabaseField dbField : queryFields.values()) {
	// // where.append(" and " + dbField.getFieldName() + "." +
	// // DatabaseTable.value() + "='" + dbField.getFieldValue()
	// // + "'");
	// // }
	// //
	// // sql.append("SELECT " + select.toString() + " FROM " + from.toString()
	// // + (where.length() > 0 ? " WHERE " + where.toString() : ""));
	// // LOGGER.info(sql.toString());
	// // return sql.toString();
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
		User user = new User();
		for (DatabaseField dbField : modelFields.values()) {
			user.addModelFields(dbField);
		}
		for (DatabaseField dbField : queryFields.values()) {
			user.addQueryFields(dbField);
		}
		return null;
	}

}
