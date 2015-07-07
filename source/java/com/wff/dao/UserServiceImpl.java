package com.wff.dao;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class UserServiceImpl implements UserService {

	@Autowired
	BasicDataSource datasource;
	
	@Override
	public boolean checkUser() {
		System.out.println(datasource.getPassword()); 
		return false;
	}

}
