package com.wff.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.model.User;


@Service 
public class UserServiceImpl implements UserService {
	Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	DataSource datasource;
	
	@Override
	public boolean checkUser() {
		//System.out.println(datasource.getPassword());
		try (Connection con = datasource.getConnection()){
			Statement statement = con.createStatement();
			ResultSet rs = statement.executeQuery("SELECT * FROM "
					+ "\"user\"");
			while(rs.next()){
				if(rs.getString("userName").equalsIgnoreCase("water") &&
						rs.getString("userPassword").equalsIgnoreCase("-")){
					System.out.println(rs.getString("userName")+rs.getString("userPassword"));
					return true;
				}
			}
			LOGGER.info("USER NOT FOUND");
			return false;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			LOGGER.info("LOG IN FAILED");
		}
		
		return false;
	}

	@Override
	public User insertUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User deleteUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

}
