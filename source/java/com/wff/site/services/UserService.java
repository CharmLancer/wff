package com.wff.site.services;

import java.util.List;

import com.wff.database.model.DatabaseField;
import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.User;

public interface UserService extends AbstractCRUDService {

	public boolean checkUser(String userName, String userPassword) throws DatabaseFieldValueException;

	List<User> getUser(DatabaseField... dbField);
}
