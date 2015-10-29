package com.wff.site.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.dao.UserService;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	UserService userService;
	
	@Override
	public boolean checkLogin(String userName, String password) {
		//return (userName.equalsIgnoreCase("water") && password.equalsIgnoreCase("-"));
		return userService.checkUser();
	}

}
