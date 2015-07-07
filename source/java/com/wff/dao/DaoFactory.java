package com.wff.dao;


public class DaoFactory {
	public static UserService getUserDAO() {
		UserService userService = new UserServiceImpl();
		return userService;
	}
}
