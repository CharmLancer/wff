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
	public static DatabaseFieldProperty USER_EMAIL = new DatabaseFieldProperty("userEmail", FieldType.STRING, "User");

	public DatabaseField userName;
	public DatabaseField userPassword;
	public DatabaseField userEmail;

	public User() {
		userName = new DatabaseField(USER_NAME, DatabaseTable.usersTable());
		userPassword = new DatabaseField(USER_PASSWORD, DatabaseTable.usersTable());
		userEmail = new DatabaseField(USER_EMAIL, DatabaseTable.usersTable());
		super.addModelFields(userName);
		super.addModelFields(userPassword);
		super.addModelFields(userEmail);
	}

}
