package com.wff.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseTable;
import com.wff.database.model.FieldName;
import com.wff.database.model.FieldType;

public class User extends AbstractModel {
	Logger LOGGER = LoggerFactory.getLogger(User.class);
	public DatabaseTable table;
	public DatabaseField userName;
	public DatabaseField userPassword;

	public User() {
		userName = new DatabaseField("userName", FieldType.STRING, this.getClass().getName(),
				DatabaseTable.usersTable());
		userPassword = new DatabaseField("userPassword", FieldType.STRING, this.getClass().getName(),
				DatabaseTable.usersTable());
		super.addModelFields(userName);
		super.addModelFields(userPassword);
	}

	@Override
	public String insert(String instance) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String select() {
		StringBuilder sql = new StringBuilder();
		StringBuilder select = new StringBuilder();
		StringBuilder from = new StringBuilder();
		StringBuilder where = new StringBuilder();
		// Select userName."INSTANCE", userName."VALUE" "userName",
		// userPassword."VALUE" "userPassword"
		// From
		// (Select "INSTANCE", "VALUE" From "BIGTABLES"
		// Where "TABLE"='User'
		// And "COLUMN" ='userName'
		// And "VALUE"='Guest') userName
		// ,
		// (Select "INSTANCE", "VALUE" From "BIGTABLES"
		// Where "TABLE"='User'
		// And "COLUMN" ='userPassword'
		// And "VALUE"='-') userPassword
		// Where userName."INSTANCE"=userPassword."INSTANCE"

		prepareFromClause(select, userName, from);
		prepareFromClause(select, userPassword, from, true);

		where.append(userName.getFieldName() + "." + FieldName.INSTANCE.getValue() + "=" + userPassword.getFieldName()
				+ "." + FieldName.INSTANCE.getValue());

		sql.append("SELECT " + select.toString() + " FROM " + from.toString()
				+ (where.length() > 0 ? " WHERE " + where.toString() : ""));
		LOGGER.info(sql.toString());
		return sql.toString();
	}

}
