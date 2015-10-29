package com.wff.dao;

import com.wff.model.User;

public interface UserService {
	public User insertUser();
	public User updateUser(User user);
	public User deleteUser(User user);
	public User getUser(User user);
	public boolean checkUser();
}
