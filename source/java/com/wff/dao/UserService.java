package com.wff.dao;

import java.util.List;

import com.wff.database.model.DatabaseField;
import com.wff.model.User;

public interface UserService {
	public boolean insertUser(User user);

	public User updateUser(User user);

	public User deleteUser(User user);

	public boolean checkUser(String userName, String userPassword);

	List<User> getUser(DatabaseField... dbField);
}
