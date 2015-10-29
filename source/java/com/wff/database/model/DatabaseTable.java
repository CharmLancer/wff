package com.wff.database.model;

public abstract class DatabaseTable {
	private static final String BIG_TABLE_NAME="\"BIGTABLES\"";
	public static String table(){
		return BIG_TABLE_NAME;
	}
}
