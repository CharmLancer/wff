package com.wff.site.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.dao.UserService;
import com.wff.model.User;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	UserService userService;

	@Override
	public boolean checkLogin(String userName, String userPassword) {
		// return (userName.equalsIgnoreCase("water") &&
		// password.equalsIgnoreCase("-"));
		return userService.checkUser(userName, userPassword);
	}

	@Override
	public boolean registerUser(String userName, String password) {
		User user = new User();
		user.userName.setFieldValue(userName);
		user.userPassword.setFieldValue(password);
		return userService.insertUser(user);
	}

}
