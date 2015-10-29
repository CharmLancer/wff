package com.wff.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseTable;
import com.wff.database.model.FieldName;
import com.wff.database.model.FieldType;

public class User extends AbstractModel {
	Logger LOGGER= LoggerFactory.getLogger(User.class);
	
	public DatabaseField userName = new DatabaseField("userName",
			FieldType.STRING);
	public DatabaseField userPassword = new DatabaseField("userPassword",
			FieldType.STRING);
	
	public User(){
		
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
		
		prepareFromClause(select,userName, from);
		if (userPassword.getFieldValue() != null
				&& !userPassword.getFieldValue().isEmpty()) {	
			select.append(userPassword.getFieldName() + "."
					+ FieldName.VALUE.getValue() + " "
					+ userPassword.getFieldName());
			// From clause
			from.append("(");
			from.append("SELECT ");
			from.append(FieldName.INSTANCE.getValue() + ","
					+ FieldName.VALUE.getValue());
			from.append(" FROM " + DatabaseTable.table());
			from.append(" WHERE " + FieldName.TABLE.getValue() + "='"
					+ userPassword.getTableName() + "'");
			from.append(" AND " + FieldName.COLUMN.getValue() + "='"
					+ userPassword.getFieldName() + "'");
			from.append(" AND " + FieldName.VALUE.getValue() + "='"
					+ userPassword.getFieldValue() + "'");
			from.append(")");
			from.append(userPassword.getFieldName());
		}
		where.append(userName.getFieldName() + "."
				+ FieldName.INSTANCE.getValue() + "="
				+ userPassword.getFieldName() + "."
				+ FieldName.INSTANCE.getValue());
		sql.append("SELECT " + select.toString() + " FROM " + from.toString() + " WHERE "+where.toString());
		LOGGER.info(sql.toString());
		return sql.toString();
	}


	private void prepareFromClause(StringBuilder select, DatabaseField field,StringBuilder from) {
		if (field.getFieldValue() != null
				&& !field.getFieldValue().isEmpty()) {
			select.append(field.getFieldName() + "."
					+ FieldName.INSTANCE.getValue());
			select.append(",");
			select.append(field.getFieldName() + "."
					+ FieldName.VALUE.getValue() + " "
					+ field.getFieldName());
			// From clause
			from.append("(");
			from.append("SELECT ");
			from.append(FieldName.INSTANCE.getValue() + ","
					+ FieldName.VALUE.getValue());
			from.append(" FROM " + DatabaseTable.table());
			from.append(" WHERE " + FieldName.TABLE.getValue() + "='"
					+ field.getTableName() + "'");
			from.append(" AND " + FieldName.COLUMN.getValue() + "='"
					+ field.getFieldName() + "'");
			from.append(" AND " + FieldName.VALUE.getValue() + "='"
					+ field.getFieldValue() + "'");
			from.append(")");
			from.append(field.getFieldName());
		}
		select.append(select.toString().length()>0? "," : select.append(" "));
		from.append(from.toString().length()>0? "," : from.append(" "));
	}

}
