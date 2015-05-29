package com.wff.site.services;

import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{

	@Override
	public boolean checkLogin(String userName, String password) {
		return (userName.equalsIgnoreCase("water") && password.equalsIgnoreCase("-"));
	}

}
