package com.wff.dao;

import com.wff.site.services.UserService;
import com.wff.site.services.UserServiceImpl;

public class DaoFactory {
	public static UserService getUserDAO() {
		UserService userService = new UserServiceImpl();
		return userService;
	}
}
