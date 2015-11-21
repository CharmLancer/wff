package com.wff.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.database.local.DatabaseService;
import com.wff.database.model.DatabaseField;
import com.wff.model.User;

@Service
public class UserServiceImpl implements UserService {
	Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	DataSource datasource;

	@Autowired
	DatabaseService databaseService;

	@Override
	public boolean checkUser(String userName, String userPassword) {
		// System.out.println(datasource.getPassword());
		User user = new User();
		user.build(user.userName.setFieldValue(userName), user.userPassword.setFieldValue(userPassword));
		List<User> users = databaseService.select(user);
		return !users.isEmpty();
	}

	@Override
	public boolean insertUser(User user) {
		return databaseService.insert(user);
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
	public List<User> getUser(DatabaseField... dbFields) {
		User user = new User();
		user.build(dbFields);
		return databaseService.select(user);
	}

}
