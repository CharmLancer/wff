package com.wff.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

import com.wff.database.model.DatabaseCommand;
import com.wff.database.model.DatabaseField;
import com.wff.database.model.FieldName;

public abstract  class AbstractModel implements RowMapper,DatabaseCommand  {

	protected ArrayList<DatabaseField> fields = new ArrayList();
	
	public AbstractModel build(DatabaseField... fields){
		this.fields.clear();
		for(DatabaseField field:fields){
			this.fields.add(field);
		}
		return this;
	};
	
	public ArrayList<DatabaseField> getFields(){
		return fields;
	}
	
	public String toString(){
		StringBuilder sb = new StringBuilder();
		for(DatabaseField field : fields){
			sb.append(field.toString());
			sb.append("\n");
		}
		return sb.toString();
	};
	

	@Override
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		for(DatabaseField field : fields){
			if (rs.getString(field.getFieldName())!=null) {
				field.setFieldValue(rs.getString(field.getFieldName()).toString(),field.getTableName());
			}	
			if(rs.getString("INSTANCE")!=null){
				field.setInstance(rs.getString("INSTANCE"));
			}
		}
		return this;
	}
	
}
