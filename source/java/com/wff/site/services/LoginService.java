package com.wff.site.services;

public interface LoginService {
	public boolean registerUser(final String userName, final String password);

	public boolean checkLogin(final String userName, final String password);
}
