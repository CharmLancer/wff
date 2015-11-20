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
		// System.out.println(datasource.getPassword());
		try (Connection con = datasource.getConnection()) {
			Statement statement = con.createStatement();
			ResultSet rs = statement.executeQuery("SELECT * FROM " + "\"USERS\"");
			while (rs.next()) {
				if (rs.getString("USER_NAME").equalsIgnoreCase("admin")
						&& rs.getString("USER_PASSWORD").equalsIgnoreCase("-")) {
					System.out.println(rs.getString("USER_NAME") + rs.getString("USER_PASSWORD"));
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
		try (Connection con = datasource.getConnection()) {
			
		} catch (SQLException e) {

		}
		return null;
	}

	@Override
	public User updateUser(User user) {
		try (Connection con = datasource.getConnection()) {

		} catch (SQLException e) {

		}
		return null;
	}

	@Override
	public User deleteUser(User user) {
		try (Connection con = datasource.getConnection()) {

		} catch (SQLException e) {

		}
		return null;
	}

	@Override
	public User getUser(User user) {
		try (Connection con = datasource.getConnection()) {

		} catch (SQLException e) {

		}
		return null;
	}

}
